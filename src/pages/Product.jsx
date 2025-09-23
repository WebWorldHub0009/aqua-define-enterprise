// src/components/ProjectPage.jsx
import React, { useState } from "react";
import ProductHero from "../components/ProductHero";
import { FaRupeeSign, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import Images
import d1 from "../assets/product/E-con.png";
import d2 from "../assets/product/E-con-grand.png";
import d3 from "../assets/product/E-con.png";
import d4 from "../assets/product/3.png";
import d5 from "../assets/product/4.png";
import d6 from "../assets/product/5.png";
import d7 from "../assets/product/6.png";
import d8 from "../assets/product/7.png";
import d9 from "../assets/product/8.png";
import d10 from "../assets/product/9.png";
import d11 from "../assets/product/10.png";
import d12 from "../assets/product/11.png";
import d13 from "../assets/product/a1.png";
import d14 from "../assets/product/a2.png";
import d15 from "../assets/product/c1.png";

// Product Data with images + pricing + specs
const productsData = {
  domestic: [
    {
      name: "E-con C-9",
      description: "Advanced domestic water purifier with UV+RO technology.",
      price: "12,999",
      img: d1,
      specs: ["UV + RO", "8L Tank", "Mineral Guard", "1 Year Warranty"],
    },
    {
      name: "E-con Grand",
      description: "Removes hardness and improves taste of household water.",
      price: "9,499",
      img: d2,
      specs: ["RO + Carbon", "10L Tank", "Auto Shutoff", "Free Installation"],
    },
    {
      name: "E-con Supreme",
      description: "Eco-friendly filter for daily household usage.",
      price: "5,299",
      img: d3,
      specs: ["Eco Filter", "5 Stage Purification", "Energy Efficient"],
    },
    { name: "E-con Swift", description: "Tap with integrated filtration and smart flow control.", price: "3,999", img: d4, specs: ["Smart Tap", "1 Yr Warranty"] },
    { name: "E-con Audi", description: "RO system for safe drinking water at home.", price: "14,499", img: d5, specs: ["RO + TDS Control", "12L Tank"] },
    { name: "E-con Virat", description: "UV sterilizer for domestic kitchen and bathroom use.", price: "7,899", img: d6, specs: ["UV Light", "High Speed Sterilization"] },
    { name: "E-con New Virat", description: "Carbon filter for odor and chlorine removal.", price: "2,799", img: d7, specs: ["Carbon Filter", "5 Micron Filtration"] },
    { name: "E-con New Shagun", description: "High-capacity sediment filter for domestic water lines.", price: "1,999", img: d8, specs: ["Sediment Filter", "Long Life"] },
    { name: "E-con Shagun", description: "Adjusts water pH for optimal taste and health.", price: "4,999", img: d9, specs: ["pH Control", "Alkaline Boost"] },
    { name: "E-con New Apple", description: "Adds essential minerals to purified water.", price: "3,499", img: d10, specs: ["Mineral Cartridge", "Easy Replace"] },
    { name: "Water Purifier", description: "Space-saving RO system for apartments.", price: "30,000", img: d11, specs: ["Compact RO", "7 Stage Filtration"] },
    { name: "Sharp Water Purifier Ro", description: "Ensures clean water for the entire home.", price: "18,999", img: d12, specs: ["Whole Home Filter", "High Flow"] },
  ],
  commercial: [
    { name: "E-con C-25", description: "High-capacity RO system for commercial buildings.", price: "45,000", img: d13, specs: ["25 LPH", "RO + UV", "Commercial Warranty"] },
    { name: "E-con C-50", description: "UV sterilization unit for offices and restaurants.", price: "28,500", img: d14, specs: ["50 LPH", "UV + Carbon"] },
  ],
  industrial: [
    { name: "E-con C-1000", description: "Heavy-duty industrial water purification system.", price: "85,000", img: d15, specs: ["1000 LPH", "SS Body", "Industrial RO"] },
  ],
};

export default function ProjectPage() {
  const [filter, setFilter] = useState("domestic");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <ProductHero />
      <section className="font-[Poppins] bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#003B73] mb-4">
            Aqua Define Enterprises Projects
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl mb-2">
            "Delivering clean water solutions for every need"
          </p>
          <p className="text-gray-600 text-md sm:text-lg">
            Domestic, Commercial, and Industrial water purification made simple and reliable
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {["domestic", "commercial", "industrial"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 shadow-lg ${
                filter === type
                  ? "bg-gradient-to-r from-cyan-600 to-blue-500 text-white"
                  : "bg-white border-2 border-cyan-600 text-cyan-600 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-500 hover:text-white"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {productsData[filter].map((product, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-cyan-300 transition transform hover:scale-105 flex flex-col"
            >
              <img src={product.img} alt={product.name} className="h-[16rem] w-full object-contain p-4" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#003B73] mb-3">{product.name}</h3>
                <p className="text-gray-700 flex-grow mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center text-cyan-600 font-semibold text-lg">
                  <FaRupeeSign className="mr-2" />
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popup Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-[#003B73] transition"
              onClick={() => setSelectedProduct(null)}
            >
              <FaTimes size={22} />
            </button>

            {/* Content */}
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="bg-gray-100 flex items-center justify-center p-6">
                <img src={selectedProduct.img} alt={selectedProduct.name} className="max-h-64 object-contain" />
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col">
                <h2 className="text-2xl font-bold text-[#003B73] mb-3">{selectedProduct.name}</h2>
                <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                <div className="flex items-center text-cyan-600 font-bold text-xl mb-4">
                  <FaRupeeSign className="mr-2" />
                  {selectedProduct.price}
                </div>

                {/* Specs */}
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  {selectedProduct.specs?.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => navigate("/contact")}
                  className="mt-auto px-6 cursor-pointer py-3 bg-gradient-to-r from-cyan-600 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition transform shadow-lg"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
