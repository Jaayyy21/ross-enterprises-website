"use server";

import { Resend } from "resend";

export async function submitInquiryAction(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const requirement = formData.get("requirement") as string;
    const message = formData.get("message") as string;

    // Basic validation
    if (!name || !company || !email || !phone || !requirement) {
      return { success: false, error: "Please fill in all required fields." };
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not set. Mocking email submission in development.");
      console.log("Mock Email Payload:", { name, company, email, phone, requirement, message });
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      return { success: true };
    }

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      // Resend requires a verified domain to send FROM. We use a default testing domain if unverified, 
      // or the user's domain. Usually onboarding@resend.dev works for testing if delivering to the registered email.
      from: "Ross Enterprises Web <onboarding@resend.dev>",
      to: "rossenterprises1996@gmail.com",
      replyTo: email,
      subject: `New Technical Brief: ${requirement} from ${company}`,
      text: `
You have received a new Technical Brief from the Ross Enterprises website.

Representative Name: ${name}
Organization: ${company}
Direct Email: ${email}
Contact Line: ${phone}
Technical Requirement: ${requirement}

Project Brief / Specifications:
${message || "No additional specifications provided."}
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error: "Failed to send the inquiry. Please try again later." };
    }

    return { success: true };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
