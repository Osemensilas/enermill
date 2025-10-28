import Head from "next/head";
import { motion } from "framer-motion";

const services = [
  {
    title: "Power System Development",
    description:
      "We design and develop efficient power generation systems tailored for commercial, industrial, and utility applications, ensuring optimal performance and sustainability.",
    icon: "fa fa-industry",
  },
  {
    title: "Power Project Construction",
    description:
      "Our construction team applies advanced engineering, logistics, and safety processes to build high-quality, reliable, and compliant power infrastructure.",
    icon: "fa fa-building",
  },
  {
    title: "Power System Operation and Maintenance",
    description:
      "We operate and maintain power systems to guarantee consistent performance, minimize downtime, and extend the lifespan of assets.",
    icon: "fa fa-wrench",
  },
  {
    title: "Technical Consultancy and Project Management",
    description:
      "With decades of industry experience, our experts provide end-to-end consultancy, technical analysis, and project management services to ensure successful project delivery.",
    icon: "fa fa-tasks",
  },
  {
    title: "Innovation and System Optimization",
    description:
      "We integrate cutting-edge technologies and cost-effective methodologies to optimize existing systems, improve efficiency, and deliver long-term value for clients.",
    icon: "fa fa-lightbulb-o",
  },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services | Enermill Power Limited</title>
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