// src/components/OurJourney.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUsers, FaCogs, FaCheckCircle } from "react-icons/fa";

const colors = {
  deepBlue: "#003B73",
  aquaCyan: "#00C2CB",
  emerald: "#00A86B",
  whitePure: "#FFFFFF",
  grayText: "#555555",
};

export default function OurJourney() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#f0faff] to-white px-4 py-8 sm:px-6 sm:py-10 overflow-hidden font-[Poppins]">
      
      {/* Background Animated Circles */}
      <div className="absolute -top-20 -left-32 w-[400px] h-[400px] rounded-full bg-[#00C2CB]/20 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-60px] w-[350px] h-[350px] rounded-full bg-[#003B73]/15 blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-[200px] h-[200px] rounded-full bg-[#00A86B]/25 blur-[90px] animate-spin-slow opacity-50"></div>

      {/* Content Container */}
      <div
        className="relative z-10 w-full max-w-[1200px] p-8 sm:p-12 rounded-3xl bg-white/70 backdrop-blur-lg border border-gray-200 shadow-2xl"
        data-aos="fade-up"
      >
        {/* Heading */}
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-tight text-center mb-6">
          BUILT ON <span style={{ color: colors.deepBlue }}>TRUST</span>, <br />
          CRAFTED FOR <span style={{ color: colors.aquaCyan }}>QUALITY</span> <br />
          EXPERIENCE <span style={{ color: colors.emerald }}>EXCELLENCE</span> WITH EVERY STEP
        </h2>

        {/* Subtext */}
        <p className="text-gray-700 text-center max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-12">
          At Aqua Define Enterprises, our journey is defined by innovation, integrity, and client satisfaction. 
          We empower industries with advanced water and power solutions, ensuring efficiency, sustainability, and global standards in every project. 
          With a commitment to excellence and reliability, we set benchmarks in the water and electrical sectors nationwide.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Clients */}
          <div
            className="relative flex flex-col items-center text-center p-8 bg-white/90 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-5xl p-5 rounded-full bg-gradient-to-tr from-[#003B73] via-[#00C2CB] to-[#00A86B] text-white shadow-lg mb-4 group-hover:scale-110 transition-transform">
              <FaUsers />
            </div>
            <h3 className="text-3xl font-bold text-[#003B73] mb-2">800+ Clients</h3>
            <p className="text-gray-600 text-sm">Globally trusted and satisfied</p>
          </div>

          {/* Solutions */}
          <div
            className="relative flex flex-col items-center text-center p-8 bg-white/90 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-5xl p-5 rounded-full bg-gradient-to-tr from-[#003B73] via-[#00C2CB] to-[#00A86B] text-white shadow-lg mb-4 group-hover:scale-110 transition-transform">
              <FaCogs />
            </div>
            <h3 className="text-3xl font-bold text-[#00C2CB] mb-2">250+ Solutions</h3>
            <p className="text-gray-600 text-sm">Tailored across industries & sectors</p>
          </div>

          {/* Happiness */}
          <div
            className="relative flex flex-col items-center text-center p-8 bg-white/90 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-5xl p-5 rounded-full bg-gradient-to-tr from-[#003B73] via-[#00C2CB] to-[#00A86B] text-white shadow-lg mb-4 group-hover:scale-110 transition-transform">
              <FaCheckCircle />
            </div>
            <h3 className="text-3xl font-bold text-[#00A86B] mb-2">99% Happiness</h3>
            <p className="text-gray-600 text-sm">Clients love working with us</p>
          </div>
        </div>
      </div>
    </section>
  );
}
