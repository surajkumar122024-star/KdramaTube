// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the DramaVerse privacy policy to understand how we collect, use, and protect your data, including cookies and third-party advertising.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: August 2026</p>

      <p className="text-slate-300 mb-4 leading-relaxed">
        This Privacy Policy explains how DramaVerse ("we", "us", "our")
        collects, uses, and protects information when you use our website
        located at kdramatube.vercel.app (the "Site").
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">1. Information We Collect</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        We may collect non-personal information such as browser type, device
        type, pages visited, and time spent on the Site through analytics
        tools. If you contact us via email, we collect the information you
        voluntarily provide, such as your name and email address.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">2. Cookies</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        We use cookies to improve user experience and to serve relevant
        advertisements. Cookies are small text files stored on your device
        that help us understand how visitors use our Site.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">3. Third-Party Advertising (Google AdSense)</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        We use Google AdSense to display advertisements on this Site.
        Google, as a third-party vendor, uses cookies to serve ads based on a
        user's prior visits to this and other websites. Google's use of
        advertising cookies enables it and its partners to serve ads based on
        your visit to this Site and/or other sites on the Internet.
      </p>
      <p className="text-slate-300 mb-4 leading-relaxed">
        You may opt out of personalized advertising by visiting{" "}
        <a
          href="https://adssettings.google.com"
          className="text-violet-400 underline hover:text-violet-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Ads Settings
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">4. Third-Party Links</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Our Site links to official streaming platforms (Netflix, Viki,
        iQIYI, Disney+, Prime Video, and others) for viewers who want to
        watch a drama. We are not responsible for the privacy practices or
        content of those external sites.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">5. Data Security</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        We take reasonable measures to protect the information we collect,
        but no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">6. Children's Privacy</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Our Site is not directed at children under 13, and we do not
        knowingly collect personal information from children.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">7. Changes to This Policy</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated revision date.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">8. Contact Us</h2>
      <p className="text-slate-300 leading-relaxed">
        If you have questions about this Privacy Policy, please{" "}
        <a href="/contact" className="text-violet-400 underline hover:text-violet-300">
          contact us
        </a>
        .
      </p>
    </main>
  );
}
