import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/work1.jpeg", alt: "2 X 1MVA transformers installed at NPDC, Benin City" },
  { src: "/work2.jpg", alt: "Installation of PVC pipes on several projects" },
  { src: "/work3.jpeg", alt: "Metering system for 33KV supply line" },
  { src: "/work4.jpeg", alt: "4 X 650KVA generators installed with termination of supply cable"},
  { src: "/work5.jpg", alt: "800A gear switch installed for Auditorium building, NPDC, Benin City" },
  { src: "/work6.jpeg", alt: "33KV ABB HT panel installed and commissioned with two outgoing"},
  { src: "/work7.jpg", alt: "Installation of ANSELL fluorescent lamp at NPDC Benin City" },
  { src: "/work8.jpg", alt: "Cable tray installation at NLNG head office Amadi, Port Harcourt"},
  { src: "/work9.jpg", alt: "External cable laying at NLNG HOD, Amadi, Port Harcourt" },
  { src: "/work10.jpeg", alt: "Installation of UPS battery at NPDC Benin City" },
  { src: "/work11.jpg", alt: "12m galvanized pole with flood light installed at NPDC Benin City"},
  { src: "/work12.jpg", alt: "Installation of external street light, NLNG HOD, Port Harcourt" },
  { src: "/work13.jpeg", alt: "Transporting of 2 X 1MVA transformers to Benin City"},
  { src: "/work14.jpg", alt: "Installation of insect centre light, Asaba airport" },
  { src: "/work15.jpeg", alt: "Floor box installed at NPDC Benin City"},
  { src: "/work16.jpeg", alt: "Recessed light fittings installed at NPDC Benin City"},
  { src: "/work17.jpeg", alt: "Installation of bus bar riser, NPDC Benin City" },
  { src: "/work18.jpeg", alt: "Installation of 6 loop fire alarm panel" },
  { src: "/work19.jpeg", alt: "Installation of approach light, Asaba airport"},
  { src: "/work20.jpeg", alt: "Installation of 120 distribution boards, NPDC Benin City" },
  { src: "/work21.jpeg", alt: "350KVA ups installed at NPDC Benin City" },
  { src: "/work22.jpeg", alt: "Installation of Synchronizing panel and termination of supply cable at Eko Court, Victoria Island, Lagos" },
  { src: "/work23.jpg", alt: "Installation of External street light, NPDC Benin City" },
  // Add more images as needed
];

export default function Gallery() {
  const [expandedImg, setExpandedImg] = useState(null);

  return (
    <>
      <Head>
        <title>Gallery | BODANT INNOVATIVE RESOURCE LTD</title>
      </Head>
      <section className="w-screen min-h-[60vh] py-20 px-4 sm:px-16 z-10 relative bg-white flex flex-col items-center justify-center">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-center"
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 2 }}
        >
          Project Gallery
        </motion.h1>
        <p className="max-w-3xl text-lg text-neutralDark mb-12 text-center">
          Explore some of our completed projects and works. Click on any image to view it in a larger size.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="rounded-xl shadow-md cursor-pointer object-cover w-full h-60 transition-transform duration-300 hover:scale-105"
              onClick={() => setExpandedImg({ ...img, idx })}
            />
          ))}
        </div>
        {expandedImg && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setExpandedImg(null)}
          >
            <div className="relative flex flex-col items-center">
              <img
                src={expandedImg.src}
                alt={expandedImg.alt}
                className="max-w-full max-h-[70vh] rounded-xl shadow-2xl mb-6"
              />
              <div className="bg-white bg-opacity-90 rounded-lg px-6 py-4 shadow text-center max-w-lg">
                <h3 className="text-xl font-bold text-offBlack mb-2">{expandedImg.alt}</h3>
              </div>
              <button
                className="absolute top-0 right-0 text-white text-4xl font-bold mt-2 mr-2"
                onClick={() => setExpandedImg(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}