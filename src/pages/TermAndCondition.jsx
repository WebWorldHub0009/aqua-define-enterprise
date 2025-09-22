// src/pages/TermsAndConditions.jsx
import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#e6f9fb] py-16 px-6 md:px-20 font-[Poppins] text-gray-800">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#00C2CB] mb-6">
          Terms & Conditions
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Welcome to{" "}
          <span className="font-semibold text-[#003B73]">Aqua Define Enterprises</span>.  
          By accessing or using our website, products, and services, you agree to comply 
          with the following Terms & Conditions. Please read them carefully.
        </p>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing our website or purchasing products from Aqua Define Enterprises, 
              you acknowledge that you have read, understood, and agree to be bound by these 
              Terms & Conditions. If you do not agree, you may not use our services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">2. Use of Our Services</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>You must be at least 18 years old or use our services under adult supervision.</li>
              <li>You agree to provide accurate, current, and complete information when requested.</li>
              <li>Any misuse, fraudulent activity, or unlawful use of our services is strictly prohibited.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">3. Products & Orders</h2>
            <p className="text-gray-700 leading-relaxed">
              All products listed are subject to availability. We reserve the right to modify, 
              update, or discontinue products without prior notice. Pricing and specifications 
              may change, but customers will always be informed before confirming their orders.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">4. Payment & Billing</h2>
            <p className="text-gray-700 leading-relaxed">
              All payments must be made using approved methods. You agree to provide 
              accurate billing details and authorize us to process payments for any 
              orders placed. Any fraudulent payment activity will result in suspension 
              of services and possible legal action.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">5. Shipping & Delivery</h2>
            <p className="text-gray-700 leading-relaxed">
              Delivery timelines depend on product availability and location. Aqua Define 
              Enterprises is not responsible for delays caused by courier services, customs, 
              or unforeseen circumstances beyond our control.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">6. Returns & Refunds</h2>
            <p className="text-gray-700 leading-relaxed">
              Returns and refunds are accepted only under our official return policy. 
              Products must be unused, in original packaging, and returned within the 
              specified timeframe. Customized or damaged products are not eligible.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">7. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All logos, content, product designs, and visuals on this website are 
              the intellectual property of Aqua Define Enterprises. Unauthorized 
              reproduction, distribution, or modification is strictly prohibited.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              Aqua Define Enterprises is not liable for any direct, indirect, incidental, 
              or consequential damages arising from the use of our products or services. 
              All products must be used as per the provided safety and usage guidelines.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">9. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms & Conditions shall be governed by and interpreted in accordance 
              with the laws of India. Any disputes shall be subject to the exclusive 
              jurisdiction of the courts in [Your City/State].
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003B73] mb-2">10. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Aqua Define Enterprises may update these Terms & Conditions at any time. 
              Continued use of our services after updates constitutes your acceptance 
              of the revised terms.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-[#003B73] mb-3">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions regarding these Terms & Conditions, please 
              reach out to us at:
            </p>
            <p className="mt-3 text-[#00C2CB] font-semibold">
              📧 Email: aquadefineenterprises@gmail.com <br />
              📞 Phone: +91 7521016666<br />
              📍 Address: Aqua Define Enterprises, [Shop No. B 19 Ground Floor, Amrapali Golf Homes GH 01 A, Shahberi Road, Nearby Galaxy Mall, Greater Noida, Uttar Pradesh 201309], India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
