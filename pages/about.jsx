import Head from "next/head";
import { motion } from "framer-motion";

const About = () => {
    return (
        <>
            <Head>
                <title>About Us | BODANT INNOVATIVE RESOURCE LTD</title>
            </Head>
            <section className="relative w-screen min-h-[60vh] py-20 px-4 sm:px-16 bg-white flex flex-col items-center justify-center z-10">
                <motion.h1 
                className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-center"
                initial={{ y: 100, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 2 }}
                >About Us</motion.h1>
                <p className="max-w-4xl text-lg text-neutralDark mb-8">
                    <span className="font-semibold">BODANT INNOVATIVE RESOURCE LTD</span> is a modern engineering construction services firm committed to providing excellence on every project. 
                    We have established ourselves as a trusted partner in the industry with a strong focus on innovation, quality, and customer satisfaction.
                </p>
                <div className="max-w-4xl text-neutralDark text-base space-y-6 text-justify">
                    <p>
                        Our team of experienced professionals delivers a wide range of services including MEP Building Services, Renewable Energy, Extra Low Voltage Systems, Power Distribution, and Project Management. 
                        We are capable of executing projects of all sizes for commercial, residential, and industrial clients.
                    </p>
                    <p>
                        At Bodant, we value every client—whether an individual or a large organization. We are committed to delivering premium services with the same level of dedication and excellence, no matter the size or scope of the project.
                    </p>
                    <p>
                        Our mission is to deliver innovative, reliable, and sustainable engineering solutions that exceed client expectations and contribute positively to society. Our vision is to be the leading provider of engineering and facility management services, recognized for excellence, integrity, and commitment to quality.
                    </p>
                </div>
                <div className="mt-12 flex flex-col sm:flex-row gap-8 w-full max-w-4xl">
                    <div className="flex-1 bg-neutral-100 rounded-xl shadow p-6">
                        <h2 className="text-primary text-2xl font-semibold mb-2">Our Mission</h2>
                        <p>
                            To deliver innovative, reliable, and sustainable engineering solutions that exceed client expectations and contribute positively to society.
                        </p>
                    </div>
                    <div className="flex-1 bg-neutral-100 rounded-xl shadow p-6">
                        <h2 className="text-primary text-2xl font-semibold mb-2">Our Vision</h2>
                        <p>
                            To be the leading provider of engineering and facility management services, recognized for excellence, integrity, and commitment to quality.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;