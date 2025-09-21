// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaTruckMoving,
  FaInfoCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaIdBadge,
  FaCertificate,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import logo from "../assets/aqua3.png"

// ✅ Aqua Define Enterprises Color Palette
const colors = {
  deepBlue: "#003B73",
  aquaCyan: "#00C2CB",
  turquoise: "#3DD6D0",
  white: "#FFFFFF",
  slateGray: "#2F2F2F",
  emerald: "#00A86B",
};

// ✅ Nav Items
const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaInfoCircle /> },
  { name: "Products", path: "/products", icon: <FaTruckMoving /> },
  { name: "Gallery", path: "/gallery", icon: <FaEnvelope /> },
  { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
  { name: "Certificates", path: "/certificates", icon: <FaCertificate /> },
];

const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 8px",
    cursor: "pointer",
    color: pathname === path ? colors.aquaCyan : colors.slateGray,
    fontWeight: pathname === path ? "600" : "400",
    transition: "all 0.3s ease",
  });

  return (
    <>
      {/* 🔹 Slim Top Header */}
      <div
        style={{
          background: `linear-gradient(to right, ${colors.deepBlue}, ${colors.aquaCyan}, ${colors.turquoise})`,
          color: colors.white,
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-1 text-xs md:text-sm gap-2 sm:gap-0">
          {/* UDYAM + NCS */}
          <div className="flex justify-between w-full sm:w-auto mb-1 sm:mb-0">
            <p className="flex items-center gap-1 text-[10px] sm:text-sm">
              <FaIdBadge style={{ color: colors.turquoise }} />
              <span>UDYAM-UP-28-0178865</span>
            </p>
            <p className="flex items-center gap-1 text-[10px] sm:text-sm">
              <MdEmail style={{ color: colors.turquoise }} />
              <span>NCS ID:- E20I72-223139421023</span>
            </p>
          </div>

          {/* Phones */}
        <div className="flex justify-between w-full sm:w-auto gap-4">
  {/* Phone */}
  <p className="flex items-center gap-2 text-[10px] sm:text-sm">
    <FaPhoneAlt style={{ color: colors.emerald }} />
    <a href="tel:+917521016666" className="text-white">
      +91 7521016666
    </a>
  </p>

  {/* Email */}
  <p className="flex items-center gap-2 text-[10px] sm:text-sm">
    <MdEmail style={{ color: colors.emarland }} />
    <a href="mailto:Aquadefineenterprises@gmail.com" className="text-white">
      Aquadefineenterprises@gmail.com
    </a>
  </p>
</div>

        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav
        style={{
          backgroundColor: colors.white,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          position: "relative",
          zIndex: 50,
        }}
        className="w-full px-4 md:px-12"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Left */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo} // put Aqua Define logo here
              alt="Aqua Define Logo"
              style={{ height: "65px", width: "auto" }}
            />
          </Link>

          {/* Nav Center */}
          <ul className="hidden md:flex gap-8 text-sm font-medium uppercase">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} style={navLinkStyle(item.path)}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Right */}
          <div className="hidden md:flex items-center gap-3">
            {Object.entries(socialLinks).map(([k, url]) => {
              const Icon =
                k === "facebook" ? FaFacebookF : k === "instagram" ? FaInstagram : FaLinkedinIn;
              return (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: colors.white,
                    color: colors.deepBlue,
                    border: `1px solid ${colors.deepBlue}`,
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <div style={{ color: colors.slateGray }} className="md:hidden">
            <FaBars onClick={toggleMenu} className="cursor-pointer text-2xl" />
          </div>
        </div>

        {/* 🔹 Mobile Panel */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              ref={panelRef}
              style={{
                width: "18rem",
                background: colors.white,
                boxShadow: "2px 0 6px rgba(0,0,0,0.1)",
              }}
              className="h-full px-6 py-4 flex flex-col"
            >
              {/* Mobile brand row */}
              <div className="flex justify-between items-center">
                <Link to="/" style={{ color: colors.deepBlue, fontWeight: "bold" }}>
                  Aqua Define Enterprises
                </Link>
                <FaTimes
                  style={{ color: colors.slateGray }}
                  className="text-xl cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>

              <hr className="my-4" />

              {/* Mobile Nav */}
              <nav className="flex flex-col gap-3 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: pathname === item.path ? colors.aquaCyan : colors.slateGray,
                      fontWeight: pathname === item.path ? "600" : "400",
                    }}
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* WhatsApp Button */}
              <div className="mt-6">
                <a
                  href="https://wa.me/+918178290067"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "100%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    borderRadius: "9999px",
                    backgroundColor: colors.emerald,
                    color: colors.white,
                    fontWeight: "600",
                    padding: "8px",
                  }}
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>

              {/* Social */}
              <div className="mt-auto pt-4 border-t">
                <div className="flex gap-3 mt-3">
                  {Object.entries(socialLinks).map(([k, url]) => {
                    const Icon =
                      k === "facebook" ? FaFacebookF : k === "instagram" ? FaInstagram : FaLinkedinIn;
                    return (
                      <a
                        key={k}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: "36px",
                          height: "36px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          backgroundColor: "#F0F0F0",
                          color: colors.deepBlue,
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div
              className="flex-1"
              style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default ModernNavbar;
