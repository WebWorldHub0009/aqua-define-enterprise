// src/components/ServiceHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "../assets/home/ssbg.jpg"; 
import logo from "../assets/aqua3.png";

const ServiceHero = () => {
  return (
    <section
      className="relative w-full h-[85vh] flex items-center justify-center text-white overflow-hidden font-[Poppins]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Floating Glow Effects */}
      <div className="absolute top-[-60px] left-[-80px] w-[280px] h-[280px] rounded-full bg-[#00C2CB]/40 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-70px] right-[-90px] w-[320px] h-[320px] rounded-full bg-[#00A86B]/40 blur-[150px] animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-6xl text-center px-6"
      >
        {/* Company Logo */}
        <motion.img
          src={logo}
          alt="Aqua Define Enterprises"
          className="mx-auto mb-6 w-24 md:w-28 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-xl">
          <span className="text-[#00C2CB]">Excellence in Service.</span>
          <br />
          <span className="text-white">
            Reliable{" "}
            <span className="text-[#00A86B]">Water & Power Solutions</span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-md md:text-lg text-gray-200 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Our services are built on{" "}
          <span className="text-[#00C2CB] font-semibold">trust</span>,{" "}
          <span className="text-[#00A86B] font-semibold">innovation</span>, and{" "}
          <span className="text-[#003B73] font-semibold">expertise</span> — 
          delivering sustainable solutions that keep businesses and communities 
          thriving every day.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
       
          <Link
            to="/contact"
            className="px-7 py-3 border-2 border-[#00C2CB] text-[#00C2CB] font-semibold rounded-full hover:bg-[#00C2CB] hover:text-white hover:scale-105 transition-all duration-500"
          >
            Book Your Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceHero;
