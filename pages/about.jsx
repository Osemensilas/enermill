import Head from "next/head";
import { motion } from "framer-motion";

const About = () => {
    return (
        <>
            <Head>
                <title>About Us | Enermill Power Limited</title>
            </Head>
            <section className="relative w-screen min-h-[60vh] py-20 px-4 sm:px-16 bg-white flex flex-col items-center justify-center z-10">
                <motion.h1 
                className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-center"
                initial={{ y: 100, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 2 }}
                >About Us</motion.h1>
                <p className="max-w-4xl text-lg text-neutralDark mb-8">
                    <span className="font-semibold">Enermill Power Limited</span> is a leading Nigerian company specializing in the development, construction, and operation of power generation systems. Incorporated under the Companies and Allied Matters Act (CAMA) 2020 and duly registered with the Corporate Affairs Commission (CAC), we are committed to delivering reliable, high-quality, and sustainable energy solutions across commercial, industrial, and utility sectors.
                </p>
                <div className="max-w-4xl text-neutralDark text-base space-y-6 text-justify">
                    <p>
                        Built on a foundation of expertise, innovation, and integrity, Enermill Power Limited is recognized for its technical excellence, project management proficiency, and deep understanding of power system design and operations. Our cumulative 120 years of industry experience empower us to deliver projects that exceed expectations in efficiency, reliability, and long-term value.
                    </p>
                    <p>
                        At Enermill, we believe in collaboration and partnership. Our team is dedicated to providing clients with tailored energy solutions that meet their unique requirements while maintaining the highest standards of safety, environmental responsibility, and regulatory compliance.
                    </p>
                    <p>
                        Driven by our passion for progress, we continue to leverage cutting-edge technologies and innovative methodologies to power industries, communities, and futures — one project at a time.
                    </p>
                </div>
                <div className="mt-12 flex flex-col sm:flex-row gap-8 w-full max-w-4xl">
                    <div className="flex-1 bg-neutral-100 rounded-xl shadow p-6">
                        <h2 className="text-primary text-2xl font-semibold mb-2">Our Mission</h2>
                        <p>
                            At Enermill Power Limited, our mission is to develop, construct, and operate world-class power systems that meet the diverse energy needs of our clients.
                        </p>
                    </div>
                    <div className="flex-1 bg-neutral-100 rounded-xl shadow p-6">
                        <h2 className="text-primary text-2xl font-semibold mb-2">Our Vision</h2>
                        <p>
                            To be a leading force in Africa’s energy transformation — delivering innovative, sustainable, and reliable power solutions that drive industrial growth, empower communities, and shape a brighter, energy-secure future.
                        </p>
                    </div>
                </div>
                <div className="mt-12 w-full max-w-4xl bg-neutral-100 rounded-xl shadow p-6">
                    <h2 className="text-primary text-2xl font-semibold mb-4">Registration Details</h2>
                    <ul className="text-neutralDark list-disc list-inside space-y-2">
                        <li><strong>Legal Name:</strong> Enermill Power Limited</li>
                        <li><strong>Company Registration #:</strong> RC8476685</li>
                        <li><strong>Status:</strong> Active</li>
                        <li><strong>Corporate Office:</strong> Block 15 Flat 4, Millennium Housing Estate, Ijaiye, Ojokoro, Lagos State, Nigeria</li>
                        <li><strong>Contact:</strong> 08169537714 | enermillpower@gmail.com</li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default About;