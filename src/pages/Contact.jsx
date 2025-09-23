// src/pages/ContactPage.jsx
import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";

const colors = {
  deepBlue: "#003B73",
  aquaCyan: "#00C2CB",
  turquoise: "#3DD6D0",
  whitePure: "#FFFFFF",
  slateGray: "#2F2F2F",
  emerald: "#00A86B",
};

// ✅ Products only with names
const productsData = {
  domestic: [
    { name: "E-con C-9" },
    { name: "E-con Grand" },
    { name: "E-con Supreme" },
    { name: "E-con Swift" },
    { name: "E-con Audi" },
    { name: "E-con Virat" },
    { name: "E-con New Virat" },
    { name: "E-con New Shagun" },
    { name: "E-con Shagun" },
    { name: "E-con New Apple" },
    { name: "Water Purifier" },
    { name: "Sharp Water Purifier Ro" },
  ],
  commercial: [
    { name: "E-con C-25" },
    { name: "E-con C-50" },
  ],
  industrial: [
    { name: "E-con C-1000" },
  ],
};

const ContactPage = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f0faff] via-[#e6f7fa] to-[#f9ffff] font-[poppins] py-1">
      {/* Hero Section */}
      <div
        className="w-full text-white text-center px-6 py-20 relative overflow-hidden"
        style={{ backgroundColor: colors.deepBlue }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Let’s Connect with <span style={{ color: colors.aquaCyan }}>Aqua Define</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
          Your trusted partner for premium water purification & eco-friendly
          solutions. Reach out today — we’re always ready to serve you better.
        </p>
      </div>

      {/* Contact Box */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl mt-[-60px] z-10 relative flex flex-col md:flex-row overflow-hidden px-6 md:px-12 py-12 md:py-16">
        {/* Left Info */}
        <div
          className="text-white px-8 py-12 relative md:w-1/2 w-full rounded-2xl md:rounded-r-none"
          style={{ backgroundColor: colors.deepBlue }}
        >
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <p className="text-white/90 text-base mb-6">
            Have questions about our products or services? We’re just a call
            or message away.
          </p>

          <div className="flex items-start gap-4 text-base mb-4">
            <HiOutlinePhone className="mt-1 text-white text-2xl" />
            <div>+91 7521016666</div>
          </div>

          <div className="flex items-start gap-4 text-base mb-4">
            <AiOutlineMail className="mt-1 text-white text-2xl" />
            <div>
              Info@aquadefineenterprises.com <br />
              Aquadefineenterprises@gmail.com
            </div>
          </div>

          <div className="flex items-start gap-4 text-base mb-4">
            <BiMap className="mt-1 text-white text-2xl" />
            <div>
              Shop No. B 19 Ground Floor Amrapali Golf Homes GH 01 A Shahberi
              Road, Nearby Galaxy Mall, Greater Noida, Uttar Pradesh 201309
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="px-8 py-12 md:w-1/2 w-full">
          <form
            className="w-full"
            action="https://formsubmit.co/Aquadefineenterprises@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://www.aquadefineenterprises.com"
            />

            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-1">
                <label className="block text-lg text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full border-b-2 border-gray-300 focus:border-aquaCyan outline-none py-3 text-base"
                />
              </div>
              <div className="flex-1">
                <label className="block text-lg text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b-2 border-gray-300 focus:border-aquaCyan outline-none py-3 text-base"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-lg text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 9876543210"
                className="w-full border-b-2 border-gray-300 focus:border-aquaCyan outline-none py-3 text-base"
              />
            </div>

            <div className="mb-8">
              <label className="block text-lg text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                required
                placeholder="Your complete address"
                className="w-full border-b-2 border-gray-300 focus:border-aquaCyan outline-none py-3 text-base"
              />
            </div>

            {/* ✅ Product Dropdown only names */}
            <div className="mb-8">
              <label className="block text-lg text-gray-700 mb-2">
                Select Product
              </label>
              <select
                name="product"
                required
                className="w-full border-b-2 border-gray-300 focus:border-aquaCyan outline-none py-3 text-base bg-transparent"
              >
                <option value="">-- Select a Product --</option>

                <optgroup label="Domestic">
                  {productsData.domestic.map((product, i) => (
                    <option key={i} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Commercial">
                  {productsData.commercial.map((product, i) => (
                    <option key={i} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Industrial">
                  {productsData.industrial.map((product, i) => (
                    <option key={i} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-lg text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                required
                placeholder="Write your message here"
                className="w-full border-b-2 border-gray-300 focus:border-aquaCyan outline-none py-3 text-base resize-none"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="px-8 py-3 rounded-lg text-lg font-semibold transition duration-300"
                style={{
                  backgroundColor: colors.aquaCyan,
                  color: colors.whitePure,
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
