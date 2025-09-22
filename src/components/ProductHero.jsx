import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/home/water-texture.jpg";
import logo from "../assets/aqua3.png";
import { Link } from "react-router-dom";

const ProductHero = () => {
  return (
    <section
      className="relative w-full h-[80vh] md:min-h-0 md:h-[85vh] flex items-center justify-center text-white overflow-hidden font-[Poppins]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003B73]/90 via-[#002d57]/85 to-[#00A86B]/80"></div>

      {/* Floating Glow Circles */}
      <div className="absolute top-[-50px] left-[-80px] w-[250px] h-[250px] rounded-full bg-[#00C2CB]/40 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-60px] right-[-80px] w-[300px] h-[300px] rounded-full bg-[#00A86B]/40 blur-[150px] animate-pulse"></div>

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
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
          <span className="text-[#00C2CB]">Defining Innovation.</span>
          <br />
          <span className="text-white">
            Premium{" "}
            <span className="text-[#00A86B]">Water & Power Solutions</span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-md md:text-lg text-gray-200 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          At{" "}
          <span className="text-[#00C2CB] font-semibold">
            Aqua Define Enterprises
          </span>
          , every solution is engineered with precision, sustainability, and
          reliability — empowering industries to stay connected, efficient, and
          future-ready.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
          <Link
            to="/contact"
            className="px-7 py-3 border-2 border-[#00C2CB] text-[#00C2CB] font-semibold rounded-full hover:bg-[#00C2CB] hover:text-white hover:scale-105 transition-all duration-500"
          >
            Contact Sales
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductHero;
