import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - Instarep.ly | Isolated Tech",
  description: "Privacy Policy for Instarep.ly - AI-powered keyboard application for social media creators",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy for Instarep.ly</h1>
          <p className="text-gray-600 mb-8"><strong>Last Updated:</strong> November 2025</p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Instarep.ly ("we", "our", or "us") is an AI-powered keyboard application designed to help social media creators generate intelligent replies to comments. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using Instarep.ly, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Information We Collect</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">1.1 Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-3">When you create an account with Instarep.ly, we collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Email Address:</strong> Used for account authentication and communication</li>
              <li><strong>User ID:</strong> A unique identifier assigned to your account</li>
              <li><strong>Authentication Data:</strong> Password (encrypted) or third-party authentication tokens</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">1.2 Keyboard Usage Data</h3>
            <p className="text-gray-700 leading-relaxed mb-3">Our keyboard extension collects the following data:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Comment Text:</strong> Only the text you paste into the keyboard for generating AI replies. This text is temporarily processed to generate responses and is not stored permanently on our servers.</li>
              <li><strong>Style Preferences:</strong> Your selected reply style settings (e.g., tone, length preferences)</li>
              <li><strong>Usage Statistics:</strong> Number of replies generated per month (used for rate limiting and usage tracking)</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4 mb-3"><strong>Important:</strong> We do NOT collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Keystrokes typed outside of our keyboard</li>
              <li>Text from other applications</li>
              <li>Passwords or sensitive information entered in other apps</li>
              <li>Screen content or screenshots</li>
              <li>Background keyboard activity</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">1.3 Technical Information</h3>
            <p className="text-gray-700 leading-relaxed mb-3">We automatically collect certain technical information:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Device Information:</strong> Device type, operating system version</li>
              <li><strong>API Request Data:</strong> IP address, user agent, timestamps (stored in API logs)</li>
              <li><strong>Authentication Tokens:</strong> Secure tokens for maintaining your login session</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">1.4 Information We Do NOT Collect</h3>
            <p className="text-gray-700 leading-relaxed mb-3">We do NOT collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Your name (unless provided in email address)</li>
              <li>Phone number</li>
              <li>Location data</li>
              <li>Contact lists</li>
              <li>Camera or photo access</li>
              <li>Microphone or audio data</li>
              <li>Calendar or reminder data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. How Keyboard Data Is Used</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">2.1 Primary Purpose</h3>
            <p className="text-gray-700 leading-relaxed mb-3">Keyboard data (comment text and style preferences) is used exclusively for:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li><strong>Generating AI Replies:</strong> Your pasted comment text is sent to OpenAI's API (via our secure backend) to generate contextually appropriate replies</li>
              <li><strong>Applying Your Preferences:</strong> Style settings are used to customize the tone and format of generated replies</li>
              <li><strong>Rate Limiting:</strong> Usage statistics ensure fair usage under your plan's limits</li>
            </ol>

            <h3 className="text-2xl font-semibold mb-3 mt-6">2.2 Data Flow</h3>
            <p className="text-gray-700 leading-relaxed mb-3">When you generate a reply:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Comment text is stored temporarily in your device's local App Group container</li>
              <li>Text and style preferences are sent to our backend server via HTTPS</li>
              <li>Our backend forwards the request to OpenAI's API</li>
              <li>The generated reply is returned to your device</li>
              <li>Comment text is NOT permanently stored on our servers</li>
            </ol>

            <h3 className="text-2xl font-semibold mb-3 mt-6">2.3 Local Storage</h3>
            <p className="text-gray-700 leading-relaxed">
              Comment text and style preferences are stored locally on your device in a secure App Group shared container. This allows the keyboard extension and main app to share data without exposing it to other applications.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. Third-Party Services</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">3.1 OpenAI</h3>
            <p className="text-gray-700 leading-relaxed mb-3"><strong>Purpose:</strong> AI-powered reply generation using GPT-4o-mini model</p>
            <p className="text-gray-700 leading-relaxed mb-3"><strong>Data Shared:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Comment text you paste for reply generation</li>
              <li>Your style preference settings</li>
              <li>No personally identifiable information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-3"><strong>OpenAI's Data Practices:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>OpenAI processes your comment text to generate replies</li>
              <li>According to OpenAI's API Data Usage Policy, data sent via API is not used to train their models</li>
              <li>OpenAI does not store comment text beyond the processing period</li>
              <li>Review OpenAI's privacy policy at: <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://openai.com/privacy</a></li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Our Safeguards:</strong> All requests are proxied through our backend server, so OpenAI never receives your email, user ID, or authentication tokens.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">3.2 Google OAuth</h3>
            <p className="text-gray-700 leading-relaxed mb-3"><strong>Purpose:</strong> Secure authentication via "Sign in with Google"</p>
            <p className="text-gray-700 leading-relaxed mb-3"><strong>Data Shared:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>User ID (Google account identifier)</li>
              <li>Email address</li>
              <li>OAuth access token (server-side validation only)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-3"><strong>Google's Data Practices:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Google authenticates your identity and provides a secure token</li>
              <li>We use OAuth 2.0 protocol for authentication</li>
              <li>No additional Google services or APIs are accessed</li>
              <li>Review Google's privacy policy at: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/privacy</a></li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Your Control:</strong> You can revoke Instarep.ly's access to your Google account at any time through your Google Account settings.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">3.3 Sign in with Apple</h3>
            <p className="text-gray-700 leading-relaxed mb-3"><strong>Purpose:</strong> Secure authentication via Apple ID</p>
            <p className="text-gray-700 leading-relaxed mb-3"><strong>Data Shared:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>User ID (Apple account identifier)</li>
              <li>Email address (optional, can be hidden)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-3"><strong>Apple's Data Practices:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Apple authenticates your identity using industry-standard OAuth 2.0</li>
              <li>You can choose to hide your email address using Apple's private relay</li>
              <li>Review Apple's privacy policy at: <a href="https://www.apple.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.apple.com/legal/privacy</a></li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">3.4 Supabase (Database & Authentication)</h3>
            <p className="text-gray-700 leading-relaxed mb-3"><strong>Purpose:</strong> User account management, authentication, and data storage</p>
            <p className="text-gray-700 leading-relaxed mb-3"><strong>Data Stored:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>User accounts (email, encrypted password, user ID)</li>
              <li>Authentication sessions</li>
              <li>Usage statistics (monthly request counts)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Security:</strong> Supabase uses PostgreSQL with industry-standard encryption and security practices.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">3.5 Vercel (Backend Infrastructure)</h3>
            <p className="text-gray-700 leading-relaxed mb-3"><strong>Purpose:</strong> API hosting and request routing</p>
            <p className="text-gray-700 leading-relaxed mb-3"><strong>Data Logged:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>API request logs (IP address, user agent, timestamps)</li>
              <li>Error logs for debugging and monitoring</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Retention:</strong> API logs are retained indefinitely for performance monitoring and security purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Data Retention Policies</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">4.1 Active Accounts</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Account Information:</strong> Retained as long as your account is active</li>
              <li><strong>Usage Statistics:</strong> Retained indefinitely for billing and analytics purposes</li>
              <li><strong>API Logs:</strong> Retained indefinitely on Vercel servers</li>
              <li><strong>Comment Text:</strong> NOT permanently stored; only processed temporarily during reply generation</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">4.2 Account Deletion</h3>
            <p className="text-gray-700 leading-relaxed mb-3">When you delete your account:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Your email and authentication credentials are permanently removed from our database</li>
              <li>Usage statistics associated with your account are anonymized</li>
              <li>API logs containing your IP address may remain for technical and security purposes</li>
              <li>Deletion is typically completed within 30 days</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Note:</strong> Currently, account deletion must be requested by contacting support. We are working on implementing a self-service account deletion feature.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">4.3 Inactive Accounts</h3>
            <p className="text-gray-700 leading-relaxed">
              Accounts inactive for more than 2 years may be automatically deleted after email notification.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">4.4 Third-Party Data Retention</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>OpenAI:</strong> Does not permanently store comment text sent via API</li>
              <li><strong>Google/Apple:</strong> Retains OAuth authentication records according to their policies</li>
              <li><strong>Supabase:</strong> Retains data according to our retention policies above</li>
              <li><strong>Vercel:</strong> Retains API logs indefinitely</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">5. User Rights</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">5.1 Your Rights Under GDPR (European Users)</h3>
            <p className="text-gray-700 leading-relaxed mb-3">If you are located in the European Economic Area (EEA), you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate personal data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of how we process your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your personal data in a structured, machine-readable format</li>
              <li><strong>Right to Object:</strong> Object to processing of your personal data for direct marketing</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">5.2 Your Rights Under CCPA (California Users)</h3>
            <p className="text-gray-700 leading-relaxed mb-3">If you are a California resident, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Right to Know:</strong> Request disclosure of personal information collected, used, or disclosed</li>
              <li><strong>Right to Delete:</strong> Request deletion of personal information we have collected</li>
              <li><strong>Right to Opt-Out:</strong> Opt-out of the sale of personal information (Note: We do NOT sell personal information)</li>
              <li><strong>Right to Non-Discrimination:</strong> Not receive discriminatory treatment for exercising your privacy rights</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">5.3 How to Exercise Your Rights</h3>
            <p className="text-gray-700 leading-relaxed mb-3">To exercise any of these rights, please contact us at:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Email:</strong> <a href="mailto:cody@isolated.tech" className="text-blue-600 hover:underline">cody@isolated.tech</a></li>
              <li><strong>In-App:</strong> Submit a request through the app's settings</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We will respond to your request within 30 days.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">5.4 Account Controls</h3>
            <p className="text-gray-700 leading-relaxed mb-3">You can manage your account settings directly in the app:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Change Email:</strong> Update your email address in account settings</li>
              <li><strong>Change Password:</strong> Reset your password through the app</li>
              <li><strong>Manage OAuth Connections:</strong> Disconnect Google or Apple authentication</li>
              <li><strong>View Usage Statistics:</strong> See your monthly usage statistics</li>
              <li><strong>Delete Account:</strong> Contact support to request account deletion</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">5.5 Keyboard Permissions</h3>
            <p className="text-gray-700 leading-relaxed mb-3">You have full control over keyboard permissions:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Full Access Permission:</strong> Required for network requests to generate AI replies. You can revoke this permission at any time in iOS Settings &gt; General &gt; Keyboard &gt; Keyboards</li>
              <li><strong>No Background Monitoring:</strong> Our keyboard only processes text when you actively use it; it does not monitor your typing in the background</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-3">We implement industry-standard security measures to protect your information:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Encryption:</strong> All data transmitted between your device and our servers uses HTTPS/TLS encryption</li>
              <li><strong>Authentication:</strong> Secure JWT (JSON Web Token) authentication for API requests</li>
              <li><strong>Password Security:</strong> Passwords are encrypted using bcrypt hashing</li>
              <li><strong>API Security:</strong> API keys and secrets are stored securely and never exposed in client code</li>
              <li><strong>Rate Limiting:</strong> Dual-layer rate limiting (10 requests/minute, 30-50 requests/month) to prevent abuse</li>
              <li><strong>Access Controls:</strong> Strict access controls on our database and backend infrastructure</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Instarep.ly is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws different from your jurisdiction. By using Instarep.ly, you consent to the transfer of your information to our servers and third-party service providers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-3">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Updating the "Last Updated" date at the top of this policy</li>
              <li>Sending an email notification to your registered email address</li>
              <li>Displaying a notification in the app</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Your continued use of Instarep.ly after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-3">If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Email:</strong> <a href="mailto:cody@isolated.tech" className="text-blue-600 hover:underline">cody@isolated.tech</a></li>
              <li><strong>Website:</strong> <a href="https://isolated.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://isolated.tech</a></li>
              <li><strong>Address:</strong> 76-6182 Lehua Rd, Kailua-Kona, HI 96740</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">11. Compliance & Legal</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">11.1 App Store Requirements</h3>
            <p className="text-gray-700 leading-relaxed mb-3">This app complies with Apple App Store privacy requirements, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Transparent disclosure of data collection practices</li>
              <li>User consent for keyboard "Full Access" permission</li>
              <li>No collection of data beyond what is disclosed</li>
              <li>Privacy Nutrition Label information is accurate and up-to-date</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">11.2 Legal Basis for Processing (GDPR)</h3>
            <p className="text-gray-700 leading-relaxed mb-3">We process your personal data under the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Contract Performance:</strong> Processing necessary to provide our services</li>
              <li><strong>Consent:</strong> You consent to data processing when creating an account</li>
              <li><strong>Legitimate Interests:</strong> Fraud prevention, security, and service improvement</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">11.3 Your Consent</h3>
            <p className="text-gray-700 leading-relaxed">
              By using Instarep.ly, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.
            </p>
          </section>

          <div className="border-t border-gray-300 pt-8 mt-12">
            <p className="text-center text-gray-600 italic">
              Thank you for trusting Instarep.ly with your data. We are committed to protecting your privacy and providing a secure, valuable service.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
