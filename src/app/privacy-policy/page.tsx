import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy and Data Protection guidelines for Ross Enterprises.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 23, 2026";

  return (
    <div className="bg-background min-h-screen">
      <section className="py-24 bg-primary-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-4xl font-bold text-background sm:text-5xl tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-background/60 font-medium">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12 prose prose-stone max-w-none">
          
          <h2 className="text-2xl font-bold text-primary-dark mb-4">1. Introduction</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            Ross Enterprises ("we," "our," or "us") is committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect the information you provide when using our website and services.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mb-4">2. Information We Collect</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            We collect personal and corporate information strictly for B2B communication, technical consultation, and order processing. The information we may collect includes:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Representative Name</li>
              <li>Organization or Company Name</li>
              <li>Direct Email Address</li>
              <li>Contact Phone Number</li>
              <li>Technical Requirements and Project Specifications</li>
            </ul>
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mb-4">3. How We Use Your Information</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            The data collected through our contact and inquiry forms is used exclusively for:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Responding to your technical inquiries and providing quotations.</li>
              <li>Fulfilling engineering requirements and delivering components.</li>
              <li>Internal record keeping and maintaining B2B relationships.</li>
              <li>Improving our technical support and customer service capabilities.</li>
            </ul>
            We do not sell, rent, or lease your personal data to third parties.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mb-4">4. Spam Prevention and Security</h2>
          <div className="p-6 bg-surface border border-border mb-8">
            <h3 className="text-lg font-bold text-primary-dark mb-3">Cloudflare Turnstile</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              To protect our website from spam, automated abuse, and malicious bot activity, we use <strong>Cloudflare Turnstile</strong> in invisible mode on our inquiry forms.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Turnstile may verify that you are a legitimate human user by analyzing browser data and network traffic patterns. This process happens securely in the background without requiring manual CAPTCHA challenges.
            </p>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Your use of our forms is subject to the <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Cloudflare Privacy Policy</a> and the <a href="https://www.cloudflare.com/cloudflare-customer-dpa/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Cloudflare Data Processing Addendum</a>.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary-dark mb-4">5. Data Retention</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            We retain your information only for as long as is necessary for the purposes set out in this Privacy Policy, complying with legal obligations, and resolving technical disputes.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mb-4">6. Contact Us</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact our technical desk at:
            <br /><br />
            <strong>Ross Enterprises</strong><br />
            Email: <a href="mailto:rossenterprises1996@gmail.com" className="text-accent hover:underline">rossenterprises1996@gmail.com</a><br />
            Vadodara, Gujarat, India
          </p>

        </div>
      </section>
    </div>
  );
}
