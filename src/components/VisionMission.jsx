// src/components/VisionMission.jsx
import React from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";

const colors = {
  deepBlue: "#003B73",
  aquaCyan: "#00C2CB",
  emerald: "#00A86B",
  turquoise: "#40E0D0",
  whitePure: "#FFFFFF",
  grayText: "#555555",
};

export default function VisionMission() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#f0faff] to-white py-10 px-6 md:px-12 overflow-hidden font-[Poppins]">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-[#00C2CB]/20 rounded-full blur-3xl top-[-150px] left-[-200px] animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#003B73]/15 rounded-full blur-3xl bottom-[-120px] right-[-150px] animate-pulse"></div>
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M80 0 L0 0 0 80" fill="none" stroke="#003B73" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-extrabold" style={{ color: colors.deepBlue }}>
          Our <span style={{ color: colors.aquaCyan }}>Vision</span> & <span style={{ color: colors.emerald }}>Mission</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Committed to delivering world-class water and power solutions that empower industries, enhance safety, and set global standards.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Vision Card */}
        <div className="relative bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden">
          {/* Glow Circle */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#00C2CB]/30 blur-3xl animate-pulse"></div>

          <div className="flex items-center mb-6">
            <div className="text-5xl p-5 rounded-full bg-gradient-to-tr from-[#003B73] via-[#00C2CB] to-[#00A86B] text-white drop-shadow-xl">
              <FaBullseye />
            </div>
            <h3 className="ml-6 text-3xl font-bold text-[#003B73]">Our Vision</h3>
          </div>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            To be the leading provider of innovative, reliable, and sustainable water and power solutions, setting benchmarks in quality, efficiency, and trust worldwide.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            We envision a future where industries and communities benefit from cutting-edge technologies that conserve resources, maximize operational safety, and deliver exceptional value.
          </p>
         
        </div>

        {/* Mission Card */}
        <div className="relative bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden">
          {/* Glow Circle */}
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#00A86B]/30 blur-3xl animate-pulse"></div>

          <div className="flex items-center mb-6">
            <div className="text-5xl p-5 rounded-full bg-gradient-to-tr from-[#003B73] via-[#00C2CB] to-[#00A86B] text-white drop-shadow-xl">
              <FaLightbulb />
            </div>
            <h3 className="ml-6 text-3xl font-bold text-[#00A86B]">Our Mission</h3>
          </div>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            To empower industries with cutting-edge electrical and water solutions, ensuring safety, reliability, and operational excellence in every project.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            We are committed to integrating sustainable practices and innovative technologies that reduce environmental impact, optimize energy usage, and deliver consistent performance.
          </p>
        
        </div>
      </div>
    </section>
  );
}
