import React, { useState } from "react";
import { FaWater, FaLeaf, FaAward, FaArrowRight } from "react-icons/fa";

import mainImg from "../assets/home/R5.png"; 
import img1 from "../assets/home/R2.png";
import img2 from "../assets/home/R3.png";
import img3 from "../assets/home/R4.png";
import bgImg from "../assets/home/bg.jpg"; 

export default function AquaHeroLayout() {
  const [currentMain, setCurrentMain] = useState(mainImg); 

  const smallImages = [img1, img2, img3];

  return (
    <section
      className="w-full font-[Poppins] relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >

      {/* Watermark */}
      <h1 className="absolute top-[40%] text-[120px] md:text-[220px] text-[#00C2CB] font-bold opacity-10 select-none pointer-events-none z-0">
        Aqua
      </h1>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 pt-8 gap-10 relative z-10">

        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col items-start gap-6 z-10 relative">
          <p className="text-sm text-[#003B73] uppercase tracking-wider">About Aqua Define</p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#003B73] leading-tight relative">
            Delivering <br /> 
            <span className="relative inline-block after:absolute after:content-[''] after:h-[4px] after:w-[80px] after:bg-[#00C2CB] after:left-0 after:-bottom-2">
              pure water
            </span> solutions
          </h1>
          <p className="text-[#0B1F3A] text-lg md:text-xl max-w-lg italic">
            Advanced purification technology ensuring safe, clean, and eco-friendly water for homes, offices, and industries. Experience innovation, sustainability, and trust with every drop.
          </p>
          <button
            className="flex items-center text-sm font-semibold text-white bg-[#003B73] border border-[#003B73] px-6 py-3 rounded hover:bg-[#00C2CB] hover:text-[#003B73] transition-all duration-300"
          >
            Explore Products <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 relative flex justify-center md:justify-end p-4 rounded-lg">
          <div className="w-full max-w-[500px] relative">
            <img
              src={currentMain}
              alt="Water Purifier"
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl z-10"
            />
          </div>
        </div>
      </div>

      {/* Middle Slim Banner */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-3 gap-6 mt-5 bg-[#E0F7FA]/10 rounded-lg relative z-10">
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003B73] leading-snug">
            Bringing world-class water purification technology to your doorstep
          </h2>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end gap-4 z-10">
          {smallImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="w-[120px] h-[120px] object-cover rounded shadow cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setCurrentMain(img)} 
            />
          ))}
        </div>
      </div>

      {/* Slim Bottom Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20 pb-16 mt-6 z-10">
        {[{
          icon: <FaWater className="text-2xl text-[#00C2CB]" />,
          title: "100% Pure Water",
          desc: "Safe and clean drinking water"
        }, {
          icon: <FaLeaf className="text-2xl text-[#00C2CB]" />,
          title: "Eco-Friendly",
          desc: "Sustainable water solutions"
        }, {
          icon: <FaAward className="text-2xl text-[#3DD6D0]" />,
          title: "Trusted by 5000+ Clients",
          desc: "Quality & reliability guaranteed"
        }].map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow flex items-center justify-between hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              {card.icon}
              <div>
                <h3 className="text-lg font-semibold text-[#0B1F3A]">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            </div>
            <FaArrowRight className="text-xl text-[#003B73]" />
          </div>
        ))}
      </div>
    </section>
  );
}
