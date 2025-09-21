// src/pages/CertificatePage.jsx
import React, { useState } from "react";
import {
  FaEye,
  FaDownload,
  FaTimes,
  FaShieldAlt,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";

import lic1 from "../assets/home/udyam.pdf";
import udyam from "../assets/home/udyam1.pdf";

import CertificateHero from "../components/CertificateHero";

const colors = {
  deepBlue: "#003B73",
  aquaCyan: "#00C2CB",
  turquoise: "#3DD6D0",
  whitePure: "#FFFFFF",
  slateGray: "#2F2F2F",
  emerald: "#00A86B",
};

const certificates = [
  {
    id: 1,
    name: "Udyam Registration Certification",
    description:
      "Official Udyam Certificate under Ministry of MSME confirming Aqua Define Enterprises as a trusted registered entity.",
    file: lic1,
    tag: "ISO Verified",
  },
  {
    id: 2,
    name: "Udyam Registration 2",
    description:
      "Official Udyam Certificate under Ministry of MSME confirming Aqua Define Enterprises as a trusted registered entity.",
    file: udyam,
    tag: "MSME Verified",
  },

];

const CertificatePage = () => {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      {/* Hero Section */}
    <CertificateHero/>

      {/* Certificates Section */}
      <section className="relative w-full mx-auto bg-gradient-to-b from-[#f9fafc] to-white py-16 px-6 font-[poppins]">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16" id="docs">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide uppercase">
              Verified{" "}
              <span style={{ color: colors.aquaCyan }}>Certificates</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At{" "}
              <span style={{ color: colors.deepBlue }} className="font-bold">
                Aqua Define Enterprises
              </span>
              , we believe in{" "}
              <span style={{ color: colors.emerald }} className="font-semibold">
                transparency and trust
              </span>
              . Explore our certifications that reflect our commitment to
              <span style={{ color: colors.turquoise }}> quality, safety,</span>{" "}
              and <span style={{ color: colors.aquaCyan }}>global standards</span>.
            </p>
          </div>

          {/* Certificates Grid */}
       {/* Certificates Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center justify-center">
  {certificates.map(({ id, name, description, file, tag }) => (
    <div
      key={id}
      className="relative bg-whitePure/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-6 flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 w-full max-w-sm"
    >
      {/* Ribbon */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#00C2CB] to-[#00A86B] text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-pulse">
        {tag}
      </div>

      {/* Title */}
      <div className="flex items-center gap-4 mb-4">
        <HiDocumentText
          style={{ color: colors.deepBlue }}
          className="text-4xl"
        />
        <h2
          className="text-xl font-bold"
          style={{ color: colors.slateGray }}
        >
          {name}
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6 text-base leading-relaxed flex-1">
        {description}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
        <button
          onClick={() => setPreviewFile(file)}
          className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#00C2CB] to-[#00A86B] hover:from-[#00A86B] hover:to-[#009977] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow-lg transition"
        >
          <FaEye />
          View
        </button>

        <a
          href={file}
          download
          className="w-full sm:w-auto flex-1 border border-[#00C2CB] text-[#00C2CB] hover:bg-[#00C2CB] hover:text-black font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow transition"
        >
          <FaDownload />
          Download
        </a>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative bg-gradient-to-r from-[#003B73] via-[#002a52] to-[#003B73] text-white py-20 px-6 font-[poppins]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <FaShieldAlt
              style={{ color: colors.aquaCyan }}
              className="text-5xl mb-4"
            />
            <h3 className="text-xl font-bold">Government Approved</h3>
            <p className="mt-2 text-gray-300 text-sm max-w-sm">
              Every license and registration is validated by government
              authorities ensuring complete compliance.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaCheckCircle
              style={{ color: colors.emerald }}
              className="text-5xl mb-4"
            />
            <h3 className="text-xl font-bold">100% Authentic</h3>
            <p className="mt-2 text-gray-300 text-sm max-w-sm">
              Verified legal documents showcasing Aqua Define’s commitment to
              authenticity and trust.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaUserTie className="text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold">Trusted Brand</h3>
            <p className="mt-2 text-gray-300 text-sm max-w-sm">
              Recognized across industries for credibility and premium quality
              water solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-6">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 shadow hover:bg-red-700 transition"
            >
              <FaTimes />
            </button>
            <iframe
              src={previewFile}
              title="Certificate Preview"
              className="w-full h-[80vh] border-0 rounded-b-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatePage;
