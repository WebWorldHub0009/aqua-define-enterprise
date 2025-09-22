// src/components/Service.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTools,
  FaCogs,
  FaWrench,
  FaScrewdriver,
  FaSyncAlt,
  FaStar,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

export const services = [
  {
    title: "Service",
    slug: "service",
    icon: <FaTools className="text-5xl text-cyan-600 group-hover:text-white transition" />,
    description: `Professional servicing to keep your systems running smoothly.
- Complete system evaluation and diagnostics
- Cleaning, calibration, and fine-tuning of all components
- Eco-friendly practices to reduce water & energy waste
- Tailored solutions for residential, commercial, and industrial setups
Clients see 35-45% improvement in system efficiency and reduced downtime.`,
  },
  {
    title: "Repair",
    slug: "repair",
    icon: <FaWrench className="text-5xl text-cyan-600 group-hover:text-white transition" />,
    description: `Expert repair solutions ensuring long-lasting performance.
- Rapid diagnostics to minimize downtime
- Replacement with premium-quality parts
- System overhaul for major failures
- Post-repair performance verification
- Recommendations to prevent future issues
Industrial and residential clients experience faster recovery and reliable operation.`,
  },
  {
    title: "Maintenance",
    slug: "maintenance",
    icon: <FaCogs className="text-5xl text-cyan-600 group-hover:text-white transition" />,
    description: `Preventive maintenance to maximize efficiency & durability.
- Scheduled inspections for all components
- Cleaning, calibration, and proactive component replacement
- Performance optimization to reduce operational costs
- Detailed reporting for informed decision-making
Clients report longer equipment lifespan, improved energy efficiency, and minimal downtime.`,
  },
  {
    title: "Installation",
    slug: "installation",
    icon: <FaScrewdriver className="text-5xl text-cyan-600 group-hover:text-white transition" />,
    description: `Seamless and professional installation services by experts.
- Site survey for space, load, and environmental assessment
- Accurate configuration and setup of all components
- Calibration, testing, and safety compliance checks
- Operator training and full documentation handover
Clients experience immediate operational efficiency and zero compromise on safety.`,
  },
  {
    title: "AMC",
    slug: "amc",
    icon: <FaSyncAlt className="text-5xl text-cyan-600 group-hover:text-white transition" />,
    description: `Annual Maintenance Contracts for hassle-free protection.
- Regular preventive maintenance and scheduled inspections
- Priority repair and emergency support
- Proactive replacement of worn-out components
- Performance reporting and optimization guidance
Clients enjoy fewer breakdowns, smoother operations, and predictable costs year-round.`,
  },
  {
    title: "Premium Solutions",
    slug: "premium-solutions",
    icon: <FaStar className="text-5xl text-cyan-600 group-hover:text-white transition" />,
    description: `Tailored solutions designed for businesses & enterprises.
- Customized high-performance service ecosystem
- Dedicated account management and priority support
- Advanced analytics, energy & water optimization
- Scalable, future-ready systems for long-term growth
Clients gain measurable efficiency improvements, cost savings, and operational resilience.`,
  },
];

export default function Service() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="relative py-10 text-center font-[Poppins] bg-gradient-to-br from-cyan-50 via-blue-100 to-cyan-50">
      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-5xl font-extrabold mt-3 mb-6 text-gray-800">
          Premium <span className="text-cyan-600">Solutions</span> for Your Needs
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto mb-14 text-base sm:text-lg">
          Aqua Define Enterprises provides top-notch services to ensure reliability, efficiency, and long-term satisfaction. Explore our complete range of services tailored for you.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedService(service)}
              className="cursor-pointer group bg-white/70 border border-cyan-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl backdrop-blur-md hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="mb-4 relative z-10">{service.icon}</div>
              <h4 className="text-2xl font-bold text-gray-800 group-hover:text-white relative z-10">{service.title}</h4>
              <p className="text-sm text-gray-600 mt-3 group-hover:text-gray-100 transition relative z-10">
                {service.description.split("\n")[0]}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-gray-700 text-lg">
          Need a custom solution?{" "}
          <Link
            to="/contact"
            className="text-cyan-600 font-semibold underline hover:text-blue-700 transition"
          >
            Contact Us
          </Link>
        </p>
      </div>

      {/* Premium Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl max-w-3xl w-full p-10 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/20 via-blue-200/10 to-white/0 pointer-events-none animate-pulse rounded-3xl"></div>

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 text-gray-500 hover:text-gray-900 text-2xl z-10"
              >
                <FaTimes />
              </button>

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="mb-4">{selectedService.icon}</div>
                <h2 className="text-4xl font-extrabold text-[#003B73] mb-6">{selectedService.title}</h2>

                {/* Description with bullets */}
                <div className="text-left mb-8">
                  {selectedService.description.split("\n").map((line, idx) => {
                    const trimmed = line.trim();
                    if (!trimmed) return null;
                    return (
                      <p key={idx} className="flex items-start mb-2 hover:text-cyan-600 transition text-gray-700">
                        {trimmed.startsWith("-") && (
                          <FaCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                        )}
                        <span>{trimmed.replace("-", "")}</span>
                      </p>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition transform shadow-lg hover:shadow-cyan-400/50"
                  onClick={() => setSelectedService(null)}
                >
                  📞 Book Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
