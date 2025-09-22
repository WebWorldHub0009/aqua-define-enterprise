// src/components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// 🎨 Aqua Define Brand Colors
const colors = {
  deepBlue: "#003B73",
  aquaCyan: "#00C2CB",
  emerald: "#00A86B",
  turquoise: "#40E0D0",
  grayText: "#555555",
  whitePure: "#FFFFFF",
  lightGray: "#F5F5F5",
};

// 🌿 Testimonials
const testimonials = [
  {
    name: "Anil Mehra",
    title: "Industrialist, Delhi",
    text: "Aqua Define's solutions are reliable and efficient. Their products truly boost our operations.",
  },
  {
    name: "Simran Kaur",
    title: "Engineer, Mumbai",
    text: "We rely on Aqua Define for top-quality electrical and water solutions — consistent excellence every time.",
  },
  {
    name: "Rahul Verma",
    title: "Project Manager, Bangalore",
    text: "Their professionalism and product reliability are unmatched. A trusted partner for our projects.",
  },
  {
    name: "Priya Nair",
    title: "Consultant, Hyderabad",
    text: "From design to delivery, Aqua Define ensures seamless solutions that exceed expectations.",
  },
  {
    name: "Arvind Sharma",
    title: "Business Owner, Rishikesh",
    text: "Using Aqua Define products enhanced the efficiency and safety of our installations significantly.",
  },
  {
    name: "Neha Patel",
    title: "Architect, Pune",
    text: "High-quality, durable, and trustworthy. Aqua Define is the go-to for all our water and power solutions.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="relative w-full py-14 bg-gradient-to-b from-white via-[#f0faff] to-white px-4 md:px-10 font-[Poppins] overflow-hidden">
      {/* ✨ Background Overlays */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(90deg, ${colors.aquaCyan}20, transparent, ${colors.deepBlue}20)`,
          }}
        ></div>
        <div
          className="absolute top-10 right-20 w-64 h-64 blur-3xl rounded-full animate-pulse"
          style={{ backgroundColor: `${colors.emerald}40` }}
        ></div>
        <div
          className="absolute bottom-10 left-20 w-72 h-72 blur-2xl rounded-full animate-pulse"
          style={{ backgroundColor: `${colors.deepBlue}25` }}
        ></div>
      </div>

      {/* 🌟 Heading */}
      <div className="relative max-w-6xl mx-auto text-center mb-16 z-10">
        <h2
          className="text-3xl md:text-5xl font-extrabold"
          style={{ color: colors.deepBlue }}
        >
          What Our <span style={{ color: colors.aquaCyan }}>Clients Say</span>
        </h2>
        <p
          className="italic mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          style={{ color: colors.grayText }}
        >
          “Trusted partner for delivering high-quality electrical and water solutions — consistent excellence and reliability.”
        </p>
      </div>

      {/* 🌿 Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative rounded-2xl p-8 h-full bg-whitePure border border-gray-100 text-gray-900 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Floating Badge */}
              <span
                className="absolute -top-5 left-5 text-xs font-bold px-3 py-1 rounded-full shadow-md"
                style={{
                  backgroundColor: colors.emerald,
                  color: colors.whitePure,
                }}
              >
                ★ Verified Client
              </span>

              <FaQuoteLeft
                className="text-3xl mb-4"
                style={{ color: colors.deepBlue }}
              />
              <p className="mb-6 italic leading-relaxed" style={{ color: colors.grayText }}>
                "{item.text}"
              </p>
              <div>
                <p className="font-semibold text-lg" style={{ color: colors.aquaCyan }}>
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
