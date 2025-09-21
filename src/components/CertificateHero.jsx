// src/components/CertificateHero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/home/cbg.jpg"; 
import logo from "../assets/aqua3.png";
import { Link } from "react-router-dom";

const colors = {
  deepBlue: "#003B73",
  aquaCyan: "#00C2CB",
  turquoise: "#3DD6D0",
  whitePure: "#FFFFFF",
  slateGray: "#2F2F2F",
  emerald: "#00A86B",
};

const CertificateHero = () => {
  return (
    <section
      className="relative w-full min-h-screen md:min-h-0 md:h-[85vh] flex items-center justify-center text-white overflow-hidden font-[poppins]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl text-center px-6"
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Aqua Define Enterprises Logo"
          className="mx-auto mb-4 w-28 md:w-32 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-snug mb-6 drop-shadow-xl">
          <span style={{ color: colors.aquaCyan }}>Certified Excellence</span>
          <br />
          <span className="text-white">
            Trusted By <span style={{ color: colors.turquoise }}>Global Standards</span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-lg text-gray-200 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          At <span style={{ color: colors.aquaCyan }} className="font-semibold">Aqua Define Enterprises</span>,  
          our <span style={{ color: colors.turquoise }} className="font-medium">certifications and accreditations </span>  
           stand as proof of our commitment to <span style={{ color: colors.emerald }}>quality</span>,  
          <span style={{ color: colors.aquaCyan }}> innovation</span>, and <span style={{ color: colors.emerald }}>trust</span>.  
          Every certificate is a symbol of delivering pure water solutions with global recognition.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
        
          <Link
            to="/contact"
            className="px-7 py-3 border-2 border-[var(--aquaCyan,#00C2CB)] text-[var(--aquaCyan,#00C2CB)] font-semibold rounded-full hover:bg-[var(--aquaCyan,#00C2CB)] hover:text-black hover:scale-105 transition-all duration-500"
          >
            Get In Touch
          </Link>
        </div>
      </motion.div>

      {/* Floating Glow Effects */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--turquoise,#3DD6D0)] rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--aquaCyan,#00C2CB)] rounded-full blur-3xl opacity-40 animate-pulse"></div>
    </section>
  );
};

export default CertificateHero;
