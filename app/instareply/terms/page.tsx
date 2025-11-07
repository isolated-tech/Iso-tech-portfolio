import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service - Instarep.ly | Isolated Tech",
  description: "Terms of Service for Instarep.ly - AI-powered keyboard application for social media creators",
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8"><strong>Last Updated:</strong> November 6, 2025</p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using InstaReply ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed">
              InstaReply is an AI-powered keyboard extension that generates reply suggestions for social media comments and messages. The Service uses artificial intelligence, powered by OpenAI's API, to analyze pasted text and generate contextually relevant responses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. User Accounts</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">3.1 Account Creation</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You may create an account using Sign in with Apple, Google Sign-In, or email/password</li>
              <li>You must provide accurate and complete information during registration</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must be at least 13 years old to use the Service</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">3.2 Account Security</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You are responsible for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Free Tier and Credits</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">4.1 Free Tier</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>New users receive 30 free AI-generated replies per month</li>
              <li>The free tier resets on the first day of each calendar month</li>
              <li>Credits do not roll over to subsequent months</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">4.2 Usage Limits</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Usage is tracked per account</li>
              <li>Rate limiting may be applied to prevent abuse</li>
              <li>We reserve the right to modify free tier limits with reasonable notice</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">5. Keyboard Extension</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">5.1 Full Access Permission</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The keyboard requires "Allow Full Access" to function properly</li>
              <li>This permission is necessary to make network requests to our API</li>
              <li>We do NOT log keystrokes or monitor your typing activity</li>
              <li>We ONLY process text that you explicitly paste into the keyboard</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">5.2 Data Processing</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Comments pasted into the keyboard are sent to OpenAI's API for processing</li>
              <li>OpenAI's data usage policies apply to this processing</li>
              <li>We do not store the content of your comments on our servers</li>
              <li>Generated replies are not logged or retained after delivery</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">6. Privacy and Data Collection</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">6.1 Data We Collect</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Account information (email, authentication tokens)</li>
              <li>Usage statistics (request count, timestamps)</li>
              <li>Device identifiers for rate limiting</li>
              <li>App settings and preferences</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">6.2 Data We Do NOT Collect</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Keystroke logging</li>
              <li>Text typed outside of explicit paste actions</li>
              <li>Personal messages or conversations</li>
              <li>Location data</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              For complete privacy details, please review our <a href="/instareply/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">7. Third-Party Services</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">7.1 OpenAI Integration</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The Service uses OpenAI's API to generate replies</li>
              <li>Your pasted comments are processed by OpenAI according to their <a href="https://openai.com/policies/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Terms of Use</a> and <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a></li>
              <li>We are not responsible for OpenAI's processing or use of your data</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">7.2 Authentication Providers</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Sign in with Apple is governed by Apple's terms</li>
              <li>Google Sign-In is governed by Google's terms</li>
              <li>We receive only basic profile information from these providers</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">8. User Conduct</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">8.1 Prohibited Uses</h3>
            <p className="text-gray-700 leading-relaxed mb-3">You agree NOT to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Generate harmful, abusive, or illegal content</li>
              <li>Harass, threaten, or harm others</li>
              <li>Impersonate any person or entity</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Bypass rate limits or usage restrictions</li>
              <li>Reverse engineer or attempt to extract the Service's source code</li>
              <li>Use the Service for automated or bulk operations without permission</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">8.2 Content Responsibility</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You are solely responsible for the content you generate using the Service</li>
              <li>You must ensure generated replies comply with the terms of service of platforms where they are posted</li>
              <li>We do not endorse or take responsibility for user-generated content</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">9. Intellectual Property</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">9.1 Service Ownership</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>InstaReply and its original content, features, and functionality are owned by Isotech</li>
              <li>The Service is protected by copyright, trademark, and other intellectual property laws</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">9.2 Generated Content</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You retain ownership of the content you input into the Service</li>
              <li>Generated replies are provided to you for your use</li>
              <li>We claim no ownership over your input or the generated output</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">10. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Implied warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Accuracy or reliability of generated content</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-3">TO THE MAXIMUM EXTENT PERMITTED BY LAW, ISOTECH SHALL NOT BE LIABLE FOR:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or use</li>
              <li>Damage resulting from use of generated content</li>
              <li>Issues arising from third-party services (OpenAI, authentication providers)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS, OR $100, WHICHEVER IS GREATER.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">12. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You agree to indemnify and hold harmless Isotech and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Content you generate or post using the Service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">13. Modifications to Service and Terms</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">13.1 Service Changes</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We reserve the right to modify or discontinue the Service at any time</li>
              <li>We will provide reasonable notice of material changes</li>
              <li>Continued use after changes constitutes acceptance</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">13.2 Terms Updates</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We may update these Terms from time to time</li>
              <li>Material changes will be communicated via email or in-app notification</li>
              <li>The "Last Updated" date will reflect the most recent changes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">14. Termination</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">14.1 By You</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You may stop using the Service and delete your account at any time</li>
              <li>Account deletion can be requested through the app or by contacting support</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">14.2 By Us</h3>
            <p className="text-gray-700 leading-relaxed mb-3">We may suspend or terminate your account if:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You violate these Terms</li>
              <li>We detect fraudulent or abusive behavior</li>
              <li>Required by law</li>
              <li>We discontinue the Service</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">14.3 Effect of Termination</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Upon termination, your right to use the Service ceases immediately</li>
              <li>Unused credits are forfeited</li>
              <li>Provisions that should survive termination will remain in effect</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">15. Governing Law and Dispute Resolution</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">15.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of the United States, without regard to conflict of law principles.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">15.2 Dispute Resolution</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Any disputes shall be resolved through binding arbitration</li>
              <li>You waive the right to participate in class action lawsuits</li>
              <li>Small claims court disputes are excluded from arbitration</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">16. Miscellaneous</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">16.1 Entire Agreement</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Isotech.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">16.2 Severability</h3>
            <p className="text-gray-700 leading-relaxed">
              If any provision is found unenforceable, the remaining provisions will remain in effect.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">16.3 Waiver</h3>
            <p className="text-gray-700 leading-relaxed">
              Failure to enforce any provision does not constitute a waiver of that provision.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">16.4 Assignment</h3>
            <p className="text-gray-700 leading-relaxed">
              You may not assign these Terms without our consent. We may assign these Terms without restriction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">17. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">For questions about these Terms, please contact us at:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Email:</strong> <a href="mailto:support@isolated.tech" className="text-blue-600 hover:underline">support@isolated.tech</a></li>
              <li><strong>Website:</strong> <a href="https://isolated.tech/instareply" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://isolated.tech/instareply</a></li>
            </ul>
          </section>

          <div className="border-t border-gray-300 pt-8 mt-12">
            <p className="text-center text-gray-600 italic">
              By using InstaReply, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
