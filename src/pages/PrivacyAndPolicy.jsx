// src/pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#e6f9fb] py-16 px-6 md:px-20 font-[Poppins] text-gray-800">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#00C2CB] mb-6">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          At <span className="font-semibold text-[#003B73]">Aqua Define Enterprises</span>, 
          we respect your privacy and are committed to safeguarding the personal information 
          you share with us. This Privacy Policy explains how we collect, use, and protect your data.
        </p>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We may collect personal details such as your name, email address, phone number, 
              company details, and billing/shipping information when you interact with our 
              website, make purchases, or contact our team. Additionally, non-personal 
              information like browser type, device details, and IP addresses may be collected 
              for analytics and security purposes.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>To process orders and provide requested services.</li>
              <li>To respond to your inquiries and offer customer support.</li>
              <li>To improve our products, services, and website experience.</li>
              <li>To send updates, promotions, or important notices (only if you opt-in).</li>
              <li>To comply with legal and regulatory requirements.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">3. Sharing & Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, rent, or trade your personal data to third parties. 
              Information may only be shared with trusted service providers, business partners, 
              or legal authorities when necessary to deliver our services or comply with the law.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">4. Data Protection</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement advanced security measures such as encryption, firewalls, and secure 
              servers to protect your data. While we take all reasonable precautions, please note 
              that no online transmission or storage system is 100% secure.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">5. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, update, or request deletion of your personal 
              information. If you wish to exercise these rights or withdraw your consent for 
              marketing communications, please contact us directly.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">6. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to external websites. Please note that we are not 
              responsible for the privacy practices of third-party sites and encourage you to 
              review their privacy policies.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">7. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Aqua Define Enterprises may update this Privacy Policy from time to time to reflect 
              changes in legal, operational, or business requirements. We encourage you to review 
              this page periodically for the latest information.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-[#003B73] mb-3">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your 
              information, please contact us at:
            </p>
            <p className="mt-3 text-[#00C2CB] font-semibold">
              📧 Email: aquadefineenterprises@gmail.com <br />
              📞 Phone: +91-7521016666<br />
              📍 Address: Aqua Define Enterprises, [Shop No. B 19 Ground Floor, Amrapali Golf Homes GH 01 A, Shahberi Road, Nearby Galaxy Mall, Greater Noida, Uttar Pradesh 201309], India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
