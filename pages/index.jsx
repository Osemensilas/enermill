import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Image from "next/image";


export default function Home() {

  const [expandedImg, setExpandedImg] = useState(null);
  const [openNav, setOpenNav] = useState(false);

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
        "At Enermill Power Limited, our mission is to develop, construct, and operate world-class power systems that meet the diverse energy needs of our clients.",
    },
    {
      title: "Our Vision",
      content:
        "To be a leading force in Africa’s energy transformation — delivering innovative, sustainable, and reliable power solutions that drive industrial growth, empower communities, and shape a brighter, energy-secure future.",
    },
  ];
  const [mvIndex, setMvIndex] = useState(0);

  useEffect(() => {
    const mvInterval = setInterval(() => {
      setMvIndex((prev) => (prev + 1) % missionVisionCards.length);
    }, 15000);
    return () => clearInterval(mvInterval);
  }, []);

  const [formVisible, setFormVisible] = useState("w-screen h-screen px-2 fixed top-0 left-0 z-100 hidden after:top-[0] after:left-[0] after:w-screen after:h-screen after:absolute after:content-[''] after:bg-black after:opacity-[0.4]");

  const seeForm = () => {
      setFormVisible("w-screen h-screen px-2 fixed top-0 left-0 z-20 after:top-[0] after:left-[0] after:w-screen after:h-screen after:absolute after:content-[''] after:bg-black after:opacity-[0.4]");
  };

  const cancelForm = () => {
      setFormVisible("w-screen h-screen px-2 fixed top-0 left-0 z-20 hidden after:top-[0] after:left-[0] after:w-screen after:h-screen after:absolute after:content-[''] after:bg-black after:opacity-[0.4]");
  };

  return (
    <>
    <Head>
      <title>Home Page | Enermill Power Limited</title>
    </Head>
    <section id="home-hero" className="home-hero">
      <Header />
      <div className="hero-background">
        <Image src="/hero.jpg" fill className="object-fill" alt="hero image" />
      </div>
      <div className="mid-hero">
        <h2 className="text-3xl sm:text-6xl text-neutralLight font-bold">Enermill Power</h2>
        <p className="text-neutralLight text-base text-center sm:text-3xl">Your trusted partner in dependable, high-quality power system development.</p>
        <button onClick={seeForm} className="bg-primary text-base text-neutralLight py-3 px-12 rounded-full">Contact Us</button>
      </div>
    </section>
    <section id="booking" className={formVisible}>
        <div className="w-full flex items-center justify-end" style={{ height: '60px' }}>
            <div onClick={cancelForm} className="relative cursor-pointer z-30" style={{ width: '40px', height: '40px' }}>
                <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-neutralLight rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
                <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-neutralLight -rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
            </div>
        </div>
        <div className="w-full flex items-center justify-center z-[999]" style={{ height: 'calc(100vh - 60px)' }}>
            <ContactForm />
        </div>
    </section>
    <section className="w-screen h-max py-[50px] relative z-10 bg-transparent px-[10px] sm:px-[40px]">
      <h2 className="text-center text-accent text-3xl sm:text-5xl mb-4">Why we should be your</h2>
      <h2 className="text-center text-accent text-3xl sm:text-5xl mb-10">Top Choice</h2>
      <p className="text-accent text-center text-xl">At Enermill Power Limited, we bring together innovation, expertise, and integrity to deliver power solutions that stand the test of time. Whether for commercial, industrial, or utility projects, we approach every partnership with the same dedication to quality, safety, and excellence. Our commitment to collaboration, technical mastery, and sustainable practices ensures that every client receives reliable energy solutions tailored to their unique needs.</p>
      <div className="w-full h-max flex items-center justify-center mt-20">
        <Link className="px-10 py-4 border-[2px] border-primary hover:border-none bg-transparent hover:bg-primary rounded-full text-primary hover:text-offBlack transition-all duration-300 ease-in-out" href={"/about"}>Learn More</Link>
      </div>
    </section>
    <section className="w-screen h-max py-[50px] bg-white px-[40px] flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
      {/* Left: About Us Text */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-offBlack text-4xl font-bold mb-20">About Us</h2>
        <p className="text-neutralDark text-lg text-justify mb-10">
          Enermill Power Limited is a leading Nigerian company specializing in the development, construction, and operation of power generation systems. Incorporated under the Companies and Allied Matters Act (CAMA) 2020 and duly registered with the Corporate Affairs Commission (CAC), we are committed to delivering reliable, high-quality, and sustainable energy solutions across commercial, industrial, and utility sectors.
        </p>
        <div className="h-max w-max">
          <Link 
            href="/about"
            className="px-8 py-3 border-2 border-primary bg-transparent hover:bg-primary rounded-full text-primary hover:text-offBlack transition-all duration-300"
          >
            Read More About Us
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-center">
        <img 
          src="/about-home.jpg" 
          alt="About Enermill Power Limited" 
          className="rounded-xl shadow-lg w-full max-w-md object-cover"
        />
      </div>
    </section>
    <section className="w-screen h-max py-[50px] bg-transparent px-[40px] flex flex-col items-center justify-center relative z-10">
      <h2 className="text-accent text-4xl font-bold mb-10 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-primary text-2xl font-semibold mb-4">Power System Development</h3>
          <p className="text-neutralDark">
            We design and develop efficient power generation systems tailored for commercial, industrial, and utility applications, ensuring optimal performance and sustainability.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-primary text-2xl font-semibold mb-4">Power Project Construction</h3>
          <p className="text-neutralDark">
            Our construction team applies advanced engineering, logistics, and safety processes to build high-quality, reliable, and compliant power infrastructure.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-primary text-2xl font-semibold mb-4">Power System Operation and Maintenance</h3>
          <p className="text-neutralDark">
            We operate and maintain power systems to guarantee consistent performance, minimize downtime, and extend the lifespan of assets.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-primary text-2xl font-semibold mb-4">Technical Consultancy and Project Management</h3>
          <p className="text-neutralDark">
            With decades of industry experience, our experts provide end-to-end consultancy, technical analysis, and project management services to ensure successful project delivery.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300 col-span-1 md:col-span-2 md:mx-auto md:w-1/2">
          <h3 className="text-primary text-2xl font-semibold mb-4">Innovation and System Optimization</h3>
          <p className="text-neutralDark">
            We integrate cutting-edge technologies and cost-effective methodologies to optimize existing systems, improve efficiency, and deliver long-term value for clients.
          </p>
        </div>
      </div>
    </section>
    <section
      className="project w-screen py-20 flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/project.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-primary/70 pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Next Project?</h2>
        <p className="text-white text-lg mb-8 max-w-2xl">
          Contact Enermill Power Limited today for innovative and reliable power generation solutions. Whether you need expert system development, construction, or maintenance, our team is ready to deliver efficient, safe, and sustainable energy systems that meet your goals and power your success.
        </p>
        <button
          onClick={seeForm}
          className="px-8 py-3 bg-transparent hover:bg-primary text-primary border-[2px] border-primary hover:border-transparent hover:text-neutralDark font-semibold rounded-full shadow transition"
        >
          Contact Us
        </button>
      </div>
    </section>
    <section className="w-screen h-max py-[70px] bg-white px-[40px] flex flex-col items-center justify-center relative z-10">
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
            "Enermill Power Limited delivered our project on schedule and with outstanding quality. Their professionalism and technical expertise exceeded our expectations."
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
            "We’re impressed by Enermill’s commitment to excellence and safety. Their team provided reliable power solutions that perfectly met our operational needs."
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
    </>
  );
}
