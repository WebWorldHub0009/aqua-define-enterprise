import React, { useState } from "react";
import { FaWater, FaLeaf, FaAward, FaArrowRight, FaShieldAlt } from "react-icons/fa";

const colors = {
  deepBlue: "#003B73",
  aquaCyan: "#00C2CB",
  turquoise: "#3DD6D0",
  darkBlue: "#0B1F3A",
  whitePure: "#FFFFFF",
};

const features = [
  {
    title: "100% Pure Water",
    icon: FaWater,
    color: colors.aquaCyan,
    short: "Safe and clean drinking water.",
    description:
      "Our advanced purification technology ensures that every drop of water you consume is completely safe, healthy, and refreshing.",
  },
  {
    title: "Eco-Friendly Solutions",
    icon: FaLeaf,
    color: colors.turquoise,
    short: "Sustainable and responsible.",
    description:
      "We focus on environmentally-friendly purification systems, reducing waste and promoting sustainable water solutions for homes and industries.",
  },
  {
    title: "Trusted by Thousands",
    icon: FaAward,
    color: colors.deepBlue,
    short: "Quality & reliability guaranteed.",
    description:
      "Aqua Define Enterprises is trusted by over 5000 clients who rely on our products for consistent quality and reliable service.",
  },
  {
    title: "Certified Quality",
    icon: FaShieldAlt,
    color: colors.darkBlue,
    short: "Safety & performance assured.",
    description:
      "All our products are certified and tested for performance, ensuring safe drinking water and long-lasting durability.",
  },
];

const AquaWhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="relative py-10 px-6 lg:px-20 overflow-hidden">
      {/* Bluish gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C2CB]/20 via-[#3DD6D0]/10 to-[#003B73]/10 -z-20" />

      {/* Floating bubbles */}
      <div className="absolute w-40 h-40 rounded-full bg-aquaCyan/30 top-10 left-10 animate-bounce-slow blur-3xl"></div>
      <div className="absolute w-60 h-60 rounded-full bg-turquoise/20 top-1/3 right-10 animate-bounce-slower blur-3xl"></div>
      <div className="absolute w-48 h-48 rounded-full bg-deepBlue/20 bottom-10 left-1/4 animate-bounce-slow blur-3xl"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-black">
          Why Choose{" "}
          <span className="text-[#003B73]">Aqua Define Enterprises?</span>
        </h2>
        <p className="text-gray-800 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
          We provide world-class water purification systems that are eco-friendly, sustainable, and trusted by thousands. Here’s why you should choose us:
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {features.map((item, index) => {
          const Icon = item.icon;
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => toggle(index)}
              className="cursor-pointer p-6 bg-white border border-gray-200 hover:border-aquaCyan rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-3">
                <div
                  className={`p-5 rounded-full bg-gradient-to-br from-aquaCyan to-turquoise shadow-lg flex items-center justify-center`}
                >
                  <Icon className="text-3xl text-[#003B73] drop-shadow-lg" />
                </div>
                <h3 className="text-lg font-semibold text-darkBlue">{item.title}</h3>
              </div>

              {/* Short description */}
              <p className="text-sm text-gray-800">{item.short}</p>

              {/* Full Description */}
              <div
                className={`text-sm mt-3 transition-all duration-500 leading-relaxed ${
                  isOpen
                    ? "max-h-60 opacity-100 text-gray-700"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {item.description}
              </div>

              {/* Arrow */}
              <FaArrowRight
                className={`absolute bottom-4 right-4 text-aquaCyan text-xl transition-transform duration-300 group-hover:translate-x-1`}
              />
            </div>
          );
        })}
      </div>

      {/* Keyframes for floating animation */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
        .animate-bounce-slower {
          animation: bounce-slower 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AquaWhyChooseUs;
