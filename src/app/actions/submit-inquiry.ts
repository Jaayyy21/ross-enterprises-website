"use server";

import { Resend } from "resend";
import { z } from "zod";
import * as fs from "fs";

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().min(2, "Company must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(100),
  phone: z.string().min(8, "Phone must be at least 8 characters").max(20),
  requirement: z.string().min(5, "Requirement must be at least 5 characters").max(200),
  message: z.string().max(2000).optional(),
  cfTurnstileResponse: z.string().min(1, "Security verification required. Please try submitting again."),
  botField: z.string().max(0).optional(), // Honeypot must be empty
});

type FormState = {
  success: boolean;
  error?: string;
  details?: Record<string, string[]>;
} | null;

export async function submitInquiryAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const tTotalStart = Date.now();
  let tValidation = 0;
  let tTurnstile = 0;
  let tResend = 0;

  const logTiming = () => {
    const tTotal = Date.now() - tTotalStart;
    console.log(`Validation: ${tValidation} ms\nTurnstile: ${tTurnstile} ms\nResend: ${tResend} ms\nTotal: ${tTotal} ms`);
  };

  try {
    const tValStart = Date.now();
    // Parse using Zod with empty string fallbacks to prevent 'null' type errors
    const rawData = {
      name: formData.get("name") || "",
      company: formData.get("company") || "",
      email: formData.get("email") || "",
      phone: formData.get("phone") || "",
      requirement: formData.get("requirement") || "",
      message: formData.get("message") || "",
      cfTurnstileResponse: formData.get("cf-turnstile-response") || "",
      botField: formData.get("bot_field") || "",
    };

    const validatedFields = inquirySchema.safeParse(rawData);
    tValidation = Date.now() - tValStart;

    if (!validatedFields.success) {
      const fieldErrors = validatedFields.error.flatten().fieldErrors;
      const firstError = Object.values(fieldErrors).flat()[0];

      logTiming();
      return {
        success: false,
        error: firstError || "Validation failed. Please check your inputs.",
        details: fieldErrors
      };
    }

    const data = validatedFields.data;

    // Honeypot Check
    if (data.botField && data.botField.length > 0) {
      console.warn("Honeypot triggered.");
      logTiming();
      return { success: true }; // Silently drop
    }

    // Cloudflare Turnstile Verification
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

    if (turnstileSecret) {
      const tTurnStart = Date.now();
      try {
        const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${turnstileSecret}&response=${data.cfTurnstileResponse}`,
        });

        const verifyData = await verifyResponse.json();
        tTurnstile = Date.now() - tTurnStart;

        if (!verifyData.success) {
          logTiming();
          return { success: false, error: "Security verification failed or expired. Please try submitting again." };
        }
      } catch (error) {
        tTurnstile = Date.now() - tTurnStart;
        console.error("Turnstile fetch error:", error);
        // Fallback: If Cloudflare's API is down, we must not block legitimate leads. Fail open.
        console.warn("Cloudflare API unreachable. Falling back to open submission.");
      }
    } else {
      console.warn("TURNSTILE_SECRET_KEY is missing. Skipping Turnstile verification.");
    }

    // Email Sending
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not set. Mocking email submission in development.");
      console.log("Mock Email Payload:", data);

      const tResStart = Date.now();
      await new Promise(resolve => setTimeout(resolve, 1500));
      tResend = Date.now() - tResStart;

      logTiming();
      return { success: true };
    }

    const resend = new Resend(resendApiKey);

    const tResStart = Date.now();
    const { error } = await resend.emails.send({
      from: "Ross Enterprises <rossenterprises1996@rossenterprises.in>",
      to: ["rossenterprises1996@gmail.com"],
      replyTo: data.email,
      subject: `New Technical Brief: ${data.requirement} from ${data.company}`,
      text: `
You have received a new Technical Brief from the Ross Enterprises website.

Representative Name: ${data.name}
Organization: ${data.company}
Direct Email: ${data.email}
Contact Line: ${data.phone}
Technical Requirement: ${data.requirement}

Project Brief / Specifications:
${data.message || "No additional specifications provided."}
      `,
    });
    tResend = Date.now() - tResStart;

    if (error) {
      console.error("Resend API Error:", error);
      logTiming();
      return { success: false, error: "Failed to send the inquiry. Please try again later." };
    }

    logTiming();
    return { success: true };
  } catch (error) {
    console.error("Server Action Error:", error);
    logTiming();
    return { success: false, error: "An unexpected error occurred." };
  }
}
