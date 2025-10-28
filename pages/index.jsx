import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";


const slides = [
  { 
    id: 1, title: "Bodant Innovative Resource Limited",
    text: "Our strength and skill in Power, Electrical Building Services, Project Management allow us to deliver complete solution to complex problem.", 
    image: "/new-hero1.jpeg",
    link: '/' 
  },
  { 
    id: 2, 
    title: "Bodant Innovative Resource Limited", 
    text: "Our strength and skill in Power, Electrical Building Services, Project Management allow us to deliver complete solution to complex problem.", 
    image: "/new-hero2.jpg",
    link: '/' 
  },
  { 
    id: 3, 
    title: "Bodant Innovative Resource Limited", 
    text: "Our strength and skill in Power, Electrical Building Services, Project Management allow us to deliver complete solution to complex problem.", 
    image: "/work14.jpg",
    link: '/' 
  },
  { 
    id: 4, 
    title: "Bodant Innovative Resource Limited", 
    text: "Our strength an skill in Power, Electric Building Services, Project Management allow us to deliver complete solution to complex problem.", 
    image: "/new-hero4.jpeg",
    link: '/' 
  },
];


export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);


  const [expandedImg, setExpandedImg] = useState(null);

  const works = [
    { src: "/work1.jpeg", alt: "2 X 1MVA transformers installed at NPDC, Benin City" },
    { src: "/work2.jpg", alt: "Installation of PVC pipes on several projects" },
    { src: "/work3.jpeg", alt: "Metering system for 33KV supply line"},
    { src: "/work4.jpeg", alt: "4 X 650KVA generators installed with termination of supply cable"},
    { src: "/work5.jpg", alt: "800A gear switch installed for Auditorium building, NPDC, Benin City"},
    { src: "/work6.jpeg", alt: "33KV ABB HT panel installed and commissioned with two outgoing"},
  ];


  const missionVisionCards = [
    {
      title: "Our Mission",
      content:
        "To deliver innovative, reliable, and sustainable engineering solutions that exceed client expectations and contribute positively to society.",
    },
    {
      title: "Our Vision",
      content:
        "To be the leading provider of engineering and facility management services, recognized for excellence, integrity, and commitment to quality.",
    },
  ];
  const [mvIndex, setMvIndex] = useState(0);

  useEffect(() => {
    const mvInterval = setInterval(() => {
      setMvIndex((prev) => (prev + 1) % missionVisionCards.length);
    }, 15000);
    return () => clearInterval(mvInterval);
  }, []);

  const [formVisible, setFormVisible] = useState("w-screen h-screen px-2 fixed top-0 left-0 z-[999] hidden after:top-[0] after:left-[0] after:w-screen after:h-screen after:absolute after:content-[''] after:bg-black after:opacity-[0.4]");

  const seeForm = () => {
      setFormVisible("w-screen h-screen px-2 fixed top-0 left-0 z-20 after:top-[0] after:left-[0] after:w-screen after:h-screen after:absolute after:content-[''] after:bg-black after:opacity-[0.4]");
  };

  const cancelForm = () => {
      setFormVisible("w-screen h-screen px-2 fixed top-0 left-0 z-20 hidden after:top-[0] after:left-[0] after:w-screen after:h-screen after:absolute after:content-[''] after:bg-black after:opacity-[0.4]");
  };

  return (
    <>
    <Head>
      <title>Home Page | BODANT INNOVATIVE RESOURCE LTD</title>
    </Head>
    <section id="home-hero" className="w-screen h-[calc(100vh-120px)] sm:h-screen relative">
      <div className="absolute z-10 hidden sm:flex justify-between w-full px-4 top-1/2 -translate-y-1/2">
        <button className="p-8 border text-accent border-accent rounded-full text-4xl" onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}>‹</button>
        <button className="p-8 border text-accent border-accent rounded-full text-4xl" onClick={() => setIndex((prev) => (prev + 1) % slides.length)}>›</button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center"
        >
          <div className="absolute top-0 left-0 h-full w-full">
            <img
            src={slides[index].image}
            alt=""
            className="w-full h-full z-0"
            style={{ pointerEvents: "none" }}
          />
          </div>
          <motion.h2 
          className="text-3xl sm:text-5xl z-10 text-accent font-bold mb-10 text-center" 
          initial={{ x: -100 }} animate={{ x: 0 }} 
          transition={{ duration: 1 }}
          style={{paddingRight: '10px', paddingLeft: '10px'}}>
            {slides[index].title}
          </motion.h2>
          <motion.h3 
          className="text-xl text-center text-accent z-10 mb-20 px-[10px] sm:px-[250px]" 
          initial={{ x: -100 }} animate={{ x: 0 }} 
          transition={{ duration: 1.5 }}>
            {slides[index].text}
          </motion.h3>
          <motion.div className="z-10" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.8 }}>
            <button onClick={seeForm} className="px-10 py-3 border-[2px] border-primary hover:border-none bg-transparent hover:bg-primary rounded-full text-primary hover:text-offBlack transition-all duration-300 ease-in-out">
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
    <section id="booking" className={formVisible}>
        <div className="w-full flex items-center justify-end z-30" style={{ height: '60px' }}>
            <div onClick={cancelForm} className="relative cursor-pointer z-30" style={{ width: '40px', height: '40px' }}>
                <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-accent rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
                <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-accent -rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
            </div>
        </div>
        <div className="w-full flex items-center justify-center z-[999]" style={{ height: 'calc(100vh - 60px)' }}>
            <ContactForm />
        </div>
    </section>
    <section className="w-screen h-max py-[150px] relative z-10 bg-transparent px-[10px] sm:px-[40px]">
      <h2 className="text-center text-accent text-3xl sm:text-5xl mb-4">Why we should be your</h2>
      <h2 className="text-center text-accent text-3xl sm:text-5xl mb-10">Top Choice</h2>
      <p className="text-accent text-center text-xl">At Bodant Innovative Resource Limited, we value every client—whether an individual or a large organization. We are committed to delivering premium services with the same level of dedication and excellence, no matter the size or scope of the project.</p>
      <div className="w-full h-max flex items-center justify-center mt-20">
        <Link className="px-10 py-4 border-[2px] border-primary hover:border-none bg-transparent hover:bg-primary rounded-full text-primary hover:text-offBlack transition-all duration-300 ease-in-out" href={"/about"}>Learn More</Link>
      </div>
    </section>
    <section className="w-screen h-max py-[120px] bg-white px-[40px] flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
      {/* Left: About Us Text */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-offBlack text-4xl font-bold mb-10">About Us</h2>
        <p className="text-neutralDark text-lg text-justify">
          BODANT INNOVATIVE RESOURCE LTD  is a modern engineering construction services firm committed to providing excellence on every project. We have established ourselves 
          as a trusted partner industry with a strong focus on innovation, quality, and customer satisfaction in every industry.
        </p>
        <p className="text-neutralDark text-lg mb-20 text-justify">
          We have established ourselves as a reliable partner. 
          MEP Building Services, Renewable Energy, Extra Low Voltages, Power Distribution, and 
          Project Management are some of our specialties. BODANT INNOVATIVE RESOURCE 
          LTD is capable of carrying out projects of all sizes for commercial, residential, institutional, and industrial use.

        </p>
        <Link 
          href="/about"
          className="px-8 py-3 border-2 border-primary bg-transparent hover:bg-primary rounded-full text-primary hover:text-offBlack transition-all duration-300"
        >
          Read More About Us
        </Link>
      </div>
      <div className="md:w-1/2 w-full flex justify-center">
        <img 
          src="/home-contact1.jpg" 
          alt="About Bodant Innovative Resource Limited" 
          className="rounded-xl shadow-lg w-full max-w-md object-cover"
        />
      </div>
    </section>
    <section className="w-screen h-max py-[50px] bg-transparent px-[40px] flex flex-col items-center justify-center relative z-10">
      <h2 className="text-accent text-4xl font-bold mb-10 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-primary text-2xl font-semibold mb-4">MEP Building Services</h3>
          <p className="text-neutralDark">
            Comprehensive Mechanical, Electrical, and Plumbing solutions for commercial and residential projects, ensuring efficiency and reliability.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-primary text-2xl font-semibold mb-4">Medium Voltage Renewable Energy</h3>
          <p className="text-neutralDark">
            Design and installation of medium voltage systems and renewable energy solutions to power your operations sustainably and safely.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-primary text-2xl font-semibold mb-4">Extra Low Voltage</h3>
          <p className="text-neutralDark">
            Advanced extra low voltage systems for security, communication, and automation, tailored to your specific needs.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-primary text-2xl font-semibold mb-4">Project Management</h3>
          <p className="text-neutralDark">
            Professional project management services to deliver your projects on time, within budget, and to the highest standards.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300 col-span-1 md:col-span-2 md:mx-auto md:w-1/2">
          <h3 className="text-primary text-2xl font-semibold mb-4">Facility Management</h3>
          <p className="text-neutralDark">
            Integrated facility management solutions to ensure your buildings and infrastructure operate efficiently, safely, and sustainably.
          </p>
        </div>
      </div>
    </section>
    <section className="w-screen h-max py-[70px] bg-neutral-100 px-[40px] flex flex-col items-center justify-center relative z-10">
      <h2 className="text-offBlack text-4xl font-bold mb-10 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {works.map((work, idx) => (
          <img
            key={idx}
            src={work.src}
            alt={work.alt}
            className="rounded-xl shadow-md cursor-pointer object-cover w-full h-60 transition-transform duration-300 hover:scale-105"
            onClick={() => setExpandedImg({ src: work.src, alt: work.alt, idx })}
          />
        ))}
      </div>
      {/* Modal for expanded image and description */}
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
              {/* Optional: Add more description here if available */}
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
      <div className="h-max w-full mt-20 flex items-start justify-center">
        <Link href="/gallery" className="px-10 py-3 border-[2px] border-primary hover:border-none bg-transparent hover:bg-primary rounded-full text-primary hover:text-offBlack transition-all duration-300 ease-in-out">View Wore</Link>
      </div>
    </section>
    <section
      className="w-screen py-20 flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/new-hero1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-primary/70 pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Next Project?</h2>
        <p className="text-white text-lg mb-8 max-w-2xl">
          Contact Bodant Innovation Resource Limited today for innovative engineering solutions, facility management, and more. Our team is ready to help you achieve your goals.
        </p>
        <button
          onClick={seeForm}
          className="px-8 py-3 bg-transparent hover:bg-primary text-primary border-[2px] border-primary hover:border-transparent hover:text-neutralDark font-semibold rounded-full shadow transition"
        >
          Contact Us
        </button>
      </div>
    </section>
    <section className="w-screen h-max py-[70px] bg-neutralDark px-[40px] flex flex-col items-center justify-center relative z-10">
      <div className="w-full max-w-xl mx-auto">
        <div className="relative">
          {missionVisionCards.map((card, idx) =>
            idx === mvIndex ? (
              <div
                key={card.title}
                className="bg-primary text-white rounded-xl shadow-lg p-10 flex flex-col items-center justify-center transition-all duration-700"
              >
                <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                <p className="text-lg text-center">{card.content}</p>
              </div>
            ) : null
          )}
          {/* Optional: Add manual navigation */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <button
              aria-label="Previous"
              className="text-primary bg-white rounded-full shadow p-2 text-2xl"
              onClick={() =>
                setMvIndex((prev) =>
                  prev === 0 ? missionVisionCards.length - 1 : prev - 1
                )
              }
            >
              ‹
            </button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <button
              aria-label="Next"
              className="text-primary bg-white rounded-full shadow p-2 text-2xl"
              onClick={() =>
                setMvIndex((prev) => (prev + 1) % missionVisionCards.length)
              }
            >
              ›
            </button>
          </div>
        </div>
        {/* Dots indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {missionVisionCards.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === mvIndex ? "bg-primary" : "bg-gray-300"
                } inline-block`}
            ></span>
          ))}
        </div>
      </div>
    </section>
      <section className="w-screen py-20 px-4 relative z-10 sm:px-16 bg-neutralDark flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
          <div className="bg-white rounded-xl shadow p-8 flex flex-col">
            <p className="text-lg text-neutralDark mb-4 italic">
              "Bodant delivered our project on time and exceeded our expectations. Their professionalism and attention to detail are unmatched."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div>
                <div className="font-semibold text-primary">Mrs. Adebayo</div>
                <div className="text-sm text-gray-500">Lagos, Nigeria</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-8 flex flex-col">
            <p className="text-lg text-neutralDark mb-4 italic">
              "Excellent service and support throughout our facility upgrade. Highly recommended for any engineering project."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div>
                <div className="font-semibold text-primary">Engr. Musa Bello</div>
                <div className="text-sm text-gray-500">Abuja, Nigeria</div>
              </div>
            </div>
          </div>
          {/* Add more reviews as needed */}
        </div>
      </section>
    <section className="w-screen h-max py-[70px] bg-white px-[40px] flex flex-col items-center justify-center relative z-10">
      <h2 className="text-offBlack text-4xl font-bold mb-10 text-center">Our Clients</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-5xl items-center justify-items-center">
        <img src="/meetvertical.png" alt="Client 1" className="h-20 object-contain" />
        <h2 className="text-xl font-bold text-purple-500">FALHUM INVESTMENT</h2>
        <img src="/convergees.png" alt="Client 3" className="h-20 object-contain" />
        <img src="/kumbit.png" alt="Client 4" className="h-20 object-contain" />
        {/* Add more client logos as needed */}
      </div>
    </section>
    </>
  );
}
