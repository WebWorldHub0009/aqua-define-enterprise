// src/components/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWater,
  FaLeaf,
  FaShieldAlt,
  FaPhoneAlt,
  FaPlus,
} from "react-icons/fa";

const colors = {
  deepBlue: "#003B73", // Primary
  aquaCyan: "#00C2CB", // Secondary
  turquoise: "#3DD6D0", // Accent
  whitePure: "#FFFFFF", // Background
  slateGray: "#2F2F2F", // Text
  emerald: "#00A86B", // Highlight
};

const faqCategories = {
  "Our Solutions": {
    icon: <FaLeaf className="text-xl" style={{ color: colors.emerald }} />,
    faqs: [
      {
        question: "What water purification solutions do you provide?",
        answer:
          "We provide domestic RO systems, commercial water treatment plants, industrial purification solutions, and eco-friendly filtration systems.",
      },
      {
        question: "Are your products eco-friendly?",
        answer:
          "Yes. Aqua Define products are built to reduce water wastage, energy consumption, and carbon footprint.",
      },
      {
        question: "Can I customize the system for my needs?",
        answer:
          "Absolutely. We design tailor-made purification setups to match your residential, industrial, or commercial requirements.",
      },
    ],
  },
  "Process & Quality": {
    icon: <FaShieldAlt className="text-xl" style={{ color: colors.deepBlue }} />,
    faqs: [
      {
        question: "How is quality ensured?",
        answer:
          "We use high-grade materials, advanced purification technologies, and strict quality testing for reliable performance.",
      },
      {
        question: "Do you provide installation?",
        answer:
          "Yes. Our trained technicians handle professional installation with precision and safety checks.",
      },
      {
        question: "What’s the process from consultation to delivery?",
        answer:
          "We assess your needs, design a custom solution, install with precision, and provide long-term maintenance support.",
      },
    ],
  },
  "Pricing & Support": {
    icon: <FaWater className="text-xl" style={{ color: colors.aquaCyan }} />,
    faqs: [
      {
        question: "Are Aqua Define systems affordable?",
        answer:
          "We deliver premium quality at competitive prices, balancing affordability with advanced purification features.",
      },
      {
        question: "Do you offer AMC or bulk discounts?",
        answer:
          "Yes. We offer Annual Maintenance Contracts (AMC) and attractive discounts on bulk purchases for businesses.",
      },
      {
        question: "How can I contact support?",
        answer:
          "You can reach us by phone, email, or WhatsApp. Our support team is available to assist you promptly.",
      },
    ],
  },
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("Our Solutions");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setOpenIndex(null);
    setActiveTab(tab);
  };

  return (
    <section
      className="relative w-full py-8  px-4 md:px-10 overflow-hidden font-[poppins]"
      style={{
        background: `linear-gradient(135deg, ${colors.whitePure}, #F0FBFC, ${colors.whitePure})`,
      }}
      aria-labelledby="faq-heading"
    >
      {/* Decorative gradient circles */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 top-[-80px] left-[-120px]"
        style={{ background: colors.turquoise }}
      ></div>
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-20 bottom-[-60px] right-[-100px]"
        style={{ background: colors.aquaCyan }}
      ></div>

      {/* Heading */}
      <div className="text-center pb-14 relative z-10">
        <h2
          id="faq-heading"
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: colors.deepBlue }}
        >
          Frequently Asked <span style={{ color: colors.aquaCyan }}>Questions</span>
        </h2>
        <p className="text-slateGray max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Get clear answers about{" "}
          <span className="font-semibold" style={{ color: colors.emerald }}>
            Aqua Define
          </span>{" "}
          solutions, processes, and customer support.
        </p>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200 backdrop-blur-xl">
        {/* Left Tabs */}
        <div
          className="md:w-1/3 p-6 flex flex-col gap-4"
          style={{
            background: `linear-gradient(180deg, ${colors.deepBlue}, ${colors.aquaCyan})`,
          }}
        >
          {Object.entries(faqCategories).map(([category, data], idx) => (
            <motion.button
              key={idx}
              onClick={() => handleTabChange(category)}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              className={`w-full px-5 py-4 rounded-2xl flex items-center gap-3 font-medium text-base transition-all duration-300 ${
                activeTab === category
                  ? "bg-white text-slateGray shadow-xl"
                  : "bg-opacity-0 text-black    hover:bg-white hover:text-slateGray"
              }`}
              aria-selected={activeTab === category}
            >
              {data.icon}
              <span>{category}</span>
            </motion.button>
          ))}
        </div>

        {/* Right FAQs */}
        <div className="md:w-2/3 p-6 sm:p-10 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {faqCategories[activeTab].faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                  <button
                    className="w-full flex justify-between items-center text-left font-semibold text-base sm:text-lg px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    onClick={() =>
                      setOpenIndex(index === openIndex ? null : index)
                    }
                    aria-expanded={openIndex === index}
                  >
                    {faq.question}
                    <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg font-bold"
                      style={{ color: colors.aquaCyan }}
                    >
                      <FaPlus />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-slateGray mt-3 text-sm leading-relaxed px-3"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}                                                                                                                                                                        