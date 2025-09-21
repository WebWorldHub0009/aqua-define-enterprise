import React from "react";
import { FaWater, FaShieldAlt, FaLeaf, FaHandHoldingMedical } from "react-icons/fa";

const colors = {
  deepBlue: "#003B73",      // Primary
  aquaCyan: "#00C2CB",      // Secondary
  turquoise: "#3DD6D0",     // Accent
  whitePure: "#FFFFFF",     // Background
  slateGray: "#2F2F2F",     // Text
  emerald: "#00A86B",       // Highlight / Icon bg
};

const steps = [
  {
    id: 1,
    title: "Identify the Requirement",
    description:
      "We assess your water purification needs with precision, understanding the products and systems you require.",
    icon: <FaLeaf size={28} />,
    color: colors.emerald,
  },
  {
    id: 2,
    title: "Customized Design Plan",
    description:
      "Tailored purification solutions designed specifically for your home or industrial setup, ensuring efficiency and reliability.",
    icon: <FaShieldAlt size={28} />,
    color: colors.deepBlue,
  },
  {
    id: 3,
    title: "Eco-Friendly Execution",
    description:
      "Our sustainable methods ensure high-quality installation and maintenance while keeping the environment safe.",
    icon: <FaHandHoldingMedical size={28} />,
    color: colors.turquoise,
  },
  {
    id: 4,
    title: "Follow-Up & Maintenance",
    description:
      "We provide ongoing support and maintenance advice to keep your water systems clean, safe, and long-lasting.",
    icon: <FaWater size={28} />,
    color: colors.aquaCyan,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-10 overflow-hidden font-[poppins]" >
      {/* Floating gradient bubbles */}
      <div className="absolute top-[-60px] left-[-40px] w-72 h-72 rounded-full bg-blue-100 animate-pulse"></div>
      <div className="absolute bottom-[-60px] left-1/4 w-72 h-72 rounded-full bg-blue-100  animate-pulse"></div>

      {/* Right side blue blobs */}
     <div className="absolute top-1/4 w-96 h-96 rounded-full bg-blue-100 animate-pulse" style={{ right: "-80px" }}></div>

     {/* <div className="absolute bottom-1/2 w-72 h-72 rounded-full bg-blue-300 animate-pulse" style={{ right: "-60px" }}></div> */}


      {/* Header */}
      <div className="relative z-10 text-center mb-12 px-6">
        <h2 className="text-4xl md:text-5xl font-bold" style={{ color: colors.deepBlue }}>
          How <span style={{ color: colors.aquaCyan }}>Aqua Define</span> Works
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-slateGray">
          A professional 4-step process that ensures efficient, eco-friendly, and reliable water purification solutions for homes and industries.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-whitePure border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Floating Icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-lg animate-bounce-slow"
              style={{ backgroundColor: step.color, color: colors.whitePure }}
            >
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-3" style={{ color: colors.deepBlue }}>
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-md leading-relaxed text-slateGray">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
