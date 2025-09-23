// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaTruckMoving,
  FaCertificate,
  FaContao,
  FaOldRepublic,
  FaTerminal,
} from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import bgFooter from "../assets/home/bg.jpg";

const colors = {
  deepBlue: "#003B73", // Primary
  aquaCyan: "#00C2CB", // Secondary
  turquoise: "#3DD6D0", // Accent
  whitePure: "#FFFFFF",
  softGray: "#D9D9D9",
};

// ✅ Now products only Domestic, Commercial, Industrial
const products = [
  { title: "Domestic Products", slug: "domestic" },
  { title: "Commercial Products", slug: "commercial" },
  { title: "Industrial Products", slug: "industrial" },
];

export default function Footer() {
  useEffect(() => {}, []);

  return (
    <footer className="relative pt-16 pb-16 px-6 md:px-16 font-[Poppins] overflow-hidden text-whitePure">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgFooter})` }}
      />
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <p
            className="text-3xl md:text-4xl font-bold tracking-wide"
            style={{ color: colors.deepBlue }}
          >
            Aqua Define Enterprises
          </p>
          <p className="leading-relaxed text-whitePure text-lg mt-2">
            Premium water purification solutions for homes, industries, and
            businesses. We ensure pure, safe, and sustainable water solutions.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              [
                "https://api.whatsapp.com/send/?phone=917521016666&text=Hello%20Aqua%20Define%20Enterprises",
                FaWhatsapp,
              ],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-aquaCyan hover:bg-turquoise text-black transition duration-300 shadow-lg"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Webmail Button */}
          <div className="mt-4">
            <a
              href="https://md-in-82.webhostbox.net:2096"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-aquaCyan text-black px-4 py-2 rounded-lg font-semibold hover:bg-turquoise transition duration-300 shadow-md"
            >
              <FaEnvelope /> Webmail
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="text-3xl font-semibold mb-4"
            style={{ color: colors.deepBlue }}
          >
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Products", "/products", <FaTruckMoving />],
              ["Contact Us", "/contact", <FaContao />],
              ["Certificates", "/certificates", <FaCertificate />],
              ["Privacy & Policy", "/privacy&policy", <FaOldRepublic />],
              ["Terms & Condition", "/term&condition", <FaTerminal />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 text-whitePure hover:text-aquaCyan transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4
            className="text-3xl font-semibold mt-6 mb-2"
            style={{ color: colors.deepBlue }}
          >
            Business Info
          </h4>
          <ul className="space-y-2 text-whitePure">
            <li>UDYAM: UP-28-0178865</li>
            <li>NCS ID: E20I72-2231394210233</li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h4
            className="text-3xl font-semibold mb-4"
            style={{ color: colors.deepBlue }}
          >
            Products
          </h4>
          <ul className="space-y-3">
            {products.map(({ title, slug }, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaTruckMoving style={{ color: colors.aquaCyan }} />
                {/* 👉 All products link to Contact Page */}
                <Link
                  to={`/products`}
                  className="text-whitePure hover:text-aquaCyan transition duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Emails */}
          <div className="mt-6">
            <h5
              className="text-3xl font-semibold mb-2"
              style={{ color: colors.deepBlue }}
            >
              Email
            </h5>
            {[
              "Info@aquadefineenterprises.com",
              "aquadefineenterprises@gmail.com",
            ].map((email, i) => (
              <p key={i} className="text-sm mb-2 flex items-center gap-2">
                <FaEnvelope style={{ color: colors.aquaCyan }} />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-aquaCyan transition duration-300"
                >
                  {email}
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4
            className="text-3xl font-semibold mb-4"
            style={{ color: colors.deepBlue }}
          >
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4">
            Shop No. B 19 Ground Floor, Amrapali Golf Homes GH 01 A, Shahberi
            Road, Nearby Galaxy Mall, Greater Noida, Uttar Pradesh 201309
          </address>

          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhoneAlt style={{ color: colors.aquaCyan }} />
            <a
              href="tel:+917521016666"
              className="hover:text-aquaCyan transition duration-300"
            >
              +91 7521016666
            </a>
          </p>

          <div className="mb-4 flex justify-start items-center">
            <div>
              <Translator />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-xs text-whitePure border-t border-gray-400 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Aqua Define Enterprises. All rights
          reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-aquaCyan transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
