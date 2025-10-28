import Head from "next/head";
import { motion } from "framer-motion";

const services = [
  {
    title: "MEP Building Services",
    description:
      "Comprehensive Mechanical, Electrical, and Plumbing solutions for commercial and residential projects, ensuring efficiency and reliability.",
    icon: "fa-solid fa-building",
  },
  {
    title: "Medium Voltage Renewable Energy",
    description:
      "Design and installation of medium voltage systems and renewable energy solutions to power your operations sustainably and safely.",
    icon: "fa-solid fa-bolt",
  },
  {
    title: "Extra Low Voltage",
    description:
      "Advanced extra low voltage systems for security, communication, and automation, tailored to your specific needs.",
    icon: "fa-solid fa-shield-halved",
  },
  {
    title: "Project Management",
    description:
      "Professional project management services to deliver your projects on time, within budget, and to the highest standards.",
    icon: "fa-solid fa-diagram-project",
  },
  {
    title: "Facility Management",
    description:
      "Integrated facility management solutions to ensure your buildings and infrastructure operate efficiently, safely, and sustainably.",
    icon: "fa-solid fa-gears",
  },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services | BODANT INNOVATIVE RESOURCE LTD</title>
      </Head>
      <section className="relative z-10 w-screen min-h-[60vh] py-20 px-4 sm:px-16 bg-white flex flex-col items-center justify-center">
        <motion.h1 
        className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-center"
        initial={{ y: 100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 2 }}
        >Our Services</motion.h1>
        <p className="max-w-3xl text-lg text-neutralDark mb-12 text-center">
          We offer a wide range of engineering and facility management services tailored to meet the unique needs of our clients. Explore our core offerings below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-neutral-100 rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 text-primary">
                <i className={`${service.icon} text-3xl`}></i>
              </div>
              <h3 className="text-primary text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-neutralDark">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;