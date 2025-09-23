// src/components/HeroAquaDefineEnhanced.jsx
import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaWater, FaLeaf, FaAward, FaStar, FaShieldAlt } from "react-icons/fa";
import img1 from "../assets/home/R5.png";
import img2 from "../assets/home/R2.png";
import img3 from "../assets/home/R3.png";
import img4 from "../assets/home/R4.png";
import img5 from "../assets/home/R6.png"; // New image 1
import img6 from "../assets/home/R7.png"; // New image 2
import { Link } from "react-router-dom";

const products = [
  {
    title: "Eco Purifier 3000",
    image: img1,
    description: "Advanced purification with 99.9% bacteria removal.",
    colors: ["#00C2CB", "#3DD6D0", "#E0F7FA"],
  },
  {
    title: "AquaSmart Filter",
    image: img2,
    description: "Smart filtration for homes and offices.",
    colors: ["#007B9E", "#00C2CB", "#B2F7F9"],
  },
  {
    title: "Portable Water Jar",
    image: img3,
    description: "Easy to carry, safe drinking solution.",
    colors: ["#005F73", "#00A9B1", "#CFFAFE"],
  },
  {
    title: "Industrial Purifier",
    image: img4,
    description: "High-capacity purifier for commercial use.",
    colors: ["#003B73", "#00C2CB", "#E0F7FA"],
  },
  {
    title: "Smart Hydrator",
    image: img5,
    description: "Intelligent hydration monitoring system.",
    colors: ["#0093B0", "#00C2CB", "#E0F7FA"],
  },
  {
    title: "Portable Mini Filter",
    image: img6,
    description: "Compact and convenient water purification.",
    colors: ["#005F73", "#00A9B1", "#CFFAFE"],
  },
];

export default function HeroAquaDefineEnhanced() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden font-[Poppins] bg-[#FAFCFF] px-6 md:px-16 lg:px-24 py-12">
      
      {/* Gradient + Blob */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E0F7FA] via-[#00C2CB]/20 to-[#003B73]/10 -z-20"></div>
      <svg className="absolute -top-40 -left-40 w-[700px] h-[700px] opacity-20 blur-3xl animate-spin-slow -z-10" viewBox="0 0 600 600">
        <defs>
          <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C2CB" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#003B73" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        <path d="M421.3,303.3Q386,356,334,382Q282,408,222,396Q162,384,111.5,347.5Q61,311,74,253Q87,195,126,146.5Q165,98,224.5,83Q284,68,341.5,92.5Q399,117,426,178.5Q453,240,421.3,303.3Z" fill="url(#blobGrad)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* LEFT */}
        <div className="space-y-6 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-[Great_Vibes] text-[#007B9E] leading-tight">
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C2CB] to-[#003B73]">Aqua Define Enterprises</span>
          </h1>
        <p className="text-lg text-gray-700 italic max-w-md">
  Delivering pure water solutions with sustainability and innovation at its core. Our products ensure clean, safe, and refreshing drinking water for homes, offices, and industrial spaces. We combine advanced technology with eco-friendly practices to provide reliable purification systems that protect your health and the environment.
</p>

          <div className="flex flex-wrap gap-4">
            <Link to='/products'>
            <button className="px-8 py-3 bg-[#003B73] cursor-pointer text-white rounded-full font-semibold shadow-md hover:bg-[#00C2CB] transition">
              Explore Products
            </button>
            </Link>
            <Link to='/contact'>
            <button className="px-8 py-3 bg-[#00C2CB]/30 cursor-pointer text-[#003B73] rounded-full font-semibold shadow hover:bg-[#00C2CB]/50 transition">
              Contact Us
            </button>
            </Link>
          </div>
        </div>

        {/* CENTER: Slider */}
        <div className="relative flex flex-col items-center justify-center mt-12 lg:mt-0">
          <div className="absolute w-[380px] h-[480px] bg-gradient-to-t from-[#00C2CB]/20 via-[#003B73]/10 to-white rounded-full top-1/2 -translate-y-1/2 shadow-inner -z-10"></div>
          <img
            src={products[current].image}
            alt={products[current].title}
            className="relative z-10 w-[320px] sm:w-[380px] md:w-[440px] lg:w-[480px] object-cover drop-shadow-2xl transition-transform duration-500 hover:scale-105"
          />
          <div className="mt-12 text-center space-y-1">
            <h4 className="text-lg md:text-xl font-semibold text-[#0B1F3A]">{products[current].title}</h4>
            <p className="text-sm md:text-base text-gray-600">{products[current].description}</p>
            {products[current].colors && (
              <div className="flex gap-2 justify-center mt-2">
                {products[current].colors.map((c, idx) => (
                  <span
                    key={idx}
                    className="w-4 h-4 rounded-full border shadow"
                    style={{ backgroundColor: c }}
                  ></span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Enhanced Thumbnails + Info + Stats */}
        <div className="space-y-6 flex flex-col justify-start mt-12 lg:mt-0">
          <h4 className="text-lg font-bold text-[#0B1F3A] mb-2">Explore Products</h4>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {products.map((p, idx) => (
              <div
                key={idx}
                onClick={() => setCurrent(idx)}
                className="border-2 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img src={p.image} alt={p.title} className="w-full h-24 object-contain p-1 bg-white"/>
              </div>
            ))}
          </div>

          {/* Stats / Info with extra 2 lines */}
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <FaWater className="text-[#00C2CB] text-3xl" />
              <div>
                <h3 className="font-bold text-[#003B73] text-lg md:text-xl">100% Pure Water</h3>
                <p className="text-gray-600 text-sm md:text-base">Safe and clean drinking water</p>
              </div>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <FaLeaf className="text-[#00C2CB] text-3xl" />
              <div>
                <h3 className="font-bold text-[#00C2CB] text-lg md:text-xl">Eco-Friendly</h3>
                <p className="text-gray-600 text-sm md:text-base">Sustainable water solutions</p>
              </div>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <FaAward className="text-[#3DD6D0] text-3xl" />
              <div>
                <h3 className="font-bold text-[#3DD6D0] text-lg md:text-xl">Trusted by 5000+ Clients</h3>
                <p className="text-gray-600 text-sm md:text-base">Quality & reliability guaranteed</p>
              </div>
            </div>
            {/* NEW TWO LINES */}
            
          
          </div>
        </div>
      </div>
    </section>
  );
}
