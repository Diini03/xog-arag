
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-[#374151]">Privacy Policy</h1>
          <div className="text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">Last updated: June 27, 2025</p>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">1. Introduction</h2>
              <p>
                LeadMamut ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">2. Information We Collect</h2>
              <h3 className="text-xl font-medium mb-3 text-[#374151]">Personal Information</h3>
              <p className="mb-3">We may collect the following personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and business information</li>
                <li>Marketing preferences and lead generation data</li>
                <li>Communication records and support interactions</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-3 mt-6 text-[#374151]">Technical Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">3. How We Use Your Information</h2>
              <p className="mb-3">We use your information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing and improving our go-to-market services</li>
                <li>Communicating with you about our services and updates</li>
                <li>Processing your requests and responding to inquiries</li>
                <li>Marketing and promotional activities (with your consent)</li>
                <li>Analyzing website usage and optimizing user experience</li>
                <li>Complying with legal obligations and protecting our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">4. Legal Basis for Processing (GDPR)</h2>
              <p className="mb-3">We process your personal data based on:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Consent:</strong> Where you have given clear consent for specific purposes</li>
                <li><strong>Contract:</strong> To perform our services and fulfill contractual obligations</li>
                <li><strong>Legitimate interests:</strong> For business operations, marketing, and service improvement</li>
                <li><strong>Legal compliance:</strong> To meet regulatory and legal requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">5. Information Sharing</h2>
              <p className="mb-3">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service providers:</strong> Third-party vendors who assist in our operations</li>
                <li><strong>Business partners:</strong> When providing integrated services</li>
                <li><strong>Legal authorities:</strong> When required by law or to protect our rights</li>
                <li><strong>Business transfers:</strong> In case of merger, acquisition, or sale of assets</li>
              </ul>
              <p className="mt-3">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">7. Your Rights</h2>
              <p className="mb-3">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
                <li><strong>Withdraw consent:</strong> Withdraw previously given consent</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at{" "}
                <a href="mailto:privacy@leadmamut.com" className="text-[#FF6B35] hover:underline">
                  privacy@leadmamut.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">8. California Privacy Rights (CCPA/CPRA)</h2>
              <p className="mb-3">California residents have additional rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right to know what personal information is collected and how it's used</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
                <li>Right to correct inaccurate personal information</li>
                <li>Right to limit the use of sensitive personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">9. Cookies and Tracking</h2>
              <p className="mb-3">
                We use cookies and similar technologies to enhance your experience. You can control cookie 
                preferences through your browser settings. We use:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics cookies:</strong> To understand website usage</li>
                <li><strong>Marketing cookies:</strong> For targeted advertising (with consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">10. Data Retention</h2>
              <p>
                We retain your personal information only as long as necessary for the purposes outlined in this 
                policy or as required by law. We regularly review and delete data that is no longer needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">11. International Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place, including standard contractual clauses 
                and adequacy decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">12. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under 16 years of age. We do not knowingly 
                collect personal information from children under 16.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">13. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any material 
                changes by email or through our website. Your continued use of our services after changes 
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">14. Contact Us</h2>
              <p className="mb-3">
                If you have questions about this privacy policy or our data practices, contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>LeadMamut</strong></p>
                <p>Email: <a href="mailto:privacy@leadmamut.com" className="text-[#FF6B35] hover:underline">privacy@leadmamut.com</a></p>
                <p>Address: 30 N Gould St Ste N, Sheridan, WY 82801</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#374151]">15. Data Protection Officer</h2>
              <p>
                For EU-related inquiries, you can contact our Data Protection Officer at{" "}
                <a href="mailto:dpo@leadmamut.com" className="text-[#FF6B35] hover:underline">
                  dpo@leadmamut.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
