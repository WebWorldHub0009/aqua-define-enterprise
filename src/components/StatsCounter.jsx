// src/components/StatsSection.jsx
import React, { useEffect, useState } from "react";
import { FaUsers, FaCogs, FaCheckCircle, FaGlobe } from "react-icons/fa";
import bg from "../assets/home/sbg.jpg"; 

// Aqua Define Color Palette
const colors = {
  deepBlue: "#003B73",
  aquaCyan: "#00C2CB",
  emerald: "#00A86B",
  whitePure: "#FFFFFF",
  grayText: "#555555",
};

// Counter StatCard Component
const StatCard = ({ icon: Icon, label, target, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cleanTarget = target.trim().toUpperCase();
    let multiplier = 1;

    if (cleanTarget.includes("K")) multiplier = 1000;
    if (cleanTarget.includes("M")) multiplier = 1000000;

    const numericPart = parseFloat(cleanTarget.replace(/[^\d.]/g, ""));
    const finalTarget = Math.floor(numericPart * multiplier);
    const duration = 2000;
    const increment = finalTarget / (duration / 10);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= finalTarget) {
        current = finalTarget;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, 10);

    return () => clearInterval(interval);
  }, [target]);

  const formatCount = () => {
    const plus = target.includes("+") ? "+" : "";
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M${plus}`;
    if (count >= 1000) return `${Math.floor(count / 1000)}K${plus}`;
    return `${count}${plus}`;
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-16 h-16 flex items-center justify-center font-[poppins] rounded-full shadow-lg mb-4"
        style={{ backgroundColor: color + "22" }}
      >
        <Icon className="text-3xl" style={{ color }} />
      </div>
      <div
        className="text-3xl font-bold"
        style={{ fontFamily: "Poppins, sans-serif", color: colors.whitePure }}
      >
        {formatCount()}
      </div>
      <p
        className="text-sm mt-2"
        style={{ fontFamily: "Poppins, sans-serif", color: "#ddd" }}
      >
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section
      className="relative py-20 px-6 md:px-20 text-center bg-fixed bg-cover bg-center font-[Poppins]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-black/40 z-0" />

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto mb-14">
        <h2
          className="text-sm tracking-widest font-[poppins] uppercase mb-3"
          style={{
            fontFamily: "Poppins, sans-serif",
            color: colors.aquaCyan,
          }}
        >
          Aqua Define Enterprises
        </h2>
        <h3
          className="text-4xl md:text-5xl font-bold font-[poppins] leading-snug mb-5"
          style={{
            fontFamily: "Poppins, sans-serif",
            color: colors.whitePure,
          }}
        >
          Powering <span style={{ color: colors.aquaCyan }}>Innovation</span> &{" "}
          <span style={{ color: colors.emerald }}>Sustainability</span>
        </h3>
        <p
          className="text-base md:text-lg font-[poppins]"
         
        >
          Delivering advanced water and power solutions with trust, efficiency,
          and excellence across industries worldwide.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-2  md:grid-cols-4 gap-10 text-center">
        <StatCard
          icon={FaUsers}
          label="Happy Clients"
          target="800+"
          color={colors.deepBlue}
        />
        <StatCard
          icon={FaCogs}
          label="Tailored Solutions"
          target="250+"
          color={colors.deepBlue}
        />
        <StatCard
          icon={FaCheckCircle}
          label="Success Rate"
          target="99%"
          color={colors.deepBlue}
        />
        <StatCard
          icon={FaGlobe}
          label="Global Reach"
          target="15+"
          color={colors.deepBlue}
        />
      </div>
    </section>
  );
};

export default StatsSection;
