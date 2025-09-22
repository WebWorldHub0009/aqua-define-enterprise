// src/components/AboutHero.jsx
import React from "react";
import { Zap, Box, ShieldCheck } from "lucide-react";
import logo from "../assets/aqua3.png";
import img from "../assets/home/abg.jpg";

const colors = {
  deepBlue: "#003B73",
  aquaCyan: "#00C2CB",
  emerald: "#00A86B",
  turquoise: "#40E0D0",
  slateGray: "#2F4F4F",
};

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-[#f0faff] to-white text-gray-900 py-16 overflow-hidden font-[poppins]">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Glowing Circles */}
        <div className="absolute w-[500px] h-[500px] bg-[#00C2CB]/20 rounded-full blur-3xl top-10 left-[-200px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#003B73]/15 rounded-full blur-3xl bottom-[-120px] right-[-150px] animate-pulse"></div>

        {/* SVG Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#003B73"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          {/* Logo */}
          <img
            src={logo}
            alt="Aqua Define Enterprises Logo"
            className="mx-auto lg:mx-0 mb-6 w-28 md:w-32 drop-shadow-lg"
          />

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            <span style={{ color: colors.deepBlue }}>Aqua Define Enterprises</span>
            <br />
            Delivering <span style={{ color: colors.aquaCyan }}>Excellence</span> in
            <span style={{ color: colors.emerald }}> Water & Power Solutions</span>
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Since <span className="font-bold" style={{ color: colors.aquaCyan }}>2021</span>, 
            we’ve been empowering industries with cutting-edge 
            <span className="font-semibold" style={{ color: colors.deepBlue }}> electrical</span> 
            and <span className="font-semibold" style={{ color: colors.turquoise }}> water solutions</span>, 
            ensuring <span className="font-semibold" style={{ color: colors.emerald }}>safety, reliability,</span> 
            and global standards.
          </p>

          {/* Mobile/Tablet Image */}
          <div className="flex justify-center lg:hidden mt-6">
            <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full bg-gradient-to-tr from-[#003B73] via-[#00C2CB] to-[#00A86B] p-[3px] shadow-2xl">
              {/* Decorative Line */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#003B73] via-[#00C2CB] to-[#00A86B] rounded-full shadow-md"></div>

              <img
                src={img}
                alt="Aqua Define Enterprises Solutions"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <Zap size={28} className="text-[#00C2CB] mb-2 drop-shadow-sm" />
              <h3 className="font-semibold text-lg text-[#003B73] mb-2">
                Reliable Products
              </h3>
              <p className="text-sm text-gray-600">
                Insulators, Busbar Supports & vital components.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <Box size={28} className="text-[#00A86B] mb-2 drop-shadow-sm" />
              <h3 className="font-semibold text-lg text-[#00C2CB] mb-2">
                Wide Range
              </h3>
              <p className="text-sm text-gray-600">
                Wholesale electrical & industrial equipment.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <ShieldCheck size={28} className="text-[#003B73] mb-2 drop-shadow-sm" />
              <h3 className="font-semibold text-lg text-[#00A86B] mb-2">
                Trusted Partner
              </h3>
              <p className="text-sm text-gray-600">
                Building credibility and excellence since 2021.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image (Desktop only) */}
        <div className="hidden lg:flex lg:w-1/2 justify-center relative">
          <div className="relative w-[340px] h-[340px] md:w-[440px] md:h-[440px] rounded-full bg-gradient-to-tr from-[#003B73] via-[#00C2CB] to-[#00A86B] p-[3px] shadow-2xl">
            {/* Decorative Line */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#003B73] via-[#00C2CB] to-[#00A86B] rounded-full shadow-md"></div>

            <img
              src={img}
              alt="Aqua Define Enterprises Solutions"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
