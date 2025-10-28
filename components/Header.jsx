import Link from "next/link";
import { useState, useEffect } from "react";
import Contact from "./ContactForm";

const Header = () => {

    const [hamOpen, setHamOpen] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [formVisible, setFormVisible] = useState("w-screen h-screen px-2 fixed top-0 left-0 z-[999] hidden after:top-[0] after:left-[0] after:w-screen after:h-screen after:absolute after:content-[''] after:bg-black after:opacity-[0.4]");

    const hamClicked = () => {
        if (hamOpen === true){
            setHamOpen(false);
        }else{
            setHamOpen(true);
        }
    }

    const linkClicked = () => {
        if (hamOpen === true){
            setHamOpen(false);
        }else{
            setHamOpen(true);
        }
    }

    useEffect(() => {
        if (hamOpen === true){
            setOpenNav(true);
        }else{
            setOpenNav(false);
        }
    },[hamOpen])

    const seeForm = () => {
        setFormVisible("w-screen h-screen px-2 fixed top-0 left-0 z-20 after:top-[0] after:left-[0] after:w-screen after:h-screen after:absolute after:content-[''] after:bg-black after:opacity-[0.4]");
    };

    const cancelForm = () => {
        setFormVisible("w-screen h-screen px-2 fixed top-0 left-0 z-20 hidden after:top-[0] after:left-[0] after:w-screen after:h-screen after:absolute after:content-[''] after:bg-black after:opacity-[0.4]");
    };

    return ( 
        <>
        <header id="header" className="relative h-[100px] sm:h-[160px] w-screen px-[10px] sm:px-[40px]">
            <div className="w-full h-full">
                <div className="w-full h-full flex items-center justify-between">
                    <div className="h-[75px] w-[150px] cursor-pointer">
                        <img className="w-full h-full" src="/bodand-logo.png" alt="" />
                    </div>
                    <div className={`sm:flex w-max h-max flex-col 
                        ${openNav ? "p-[20px] flex flex-col fixed top-0 left-0 w-screen h-screen bg-neutralDark items-start z-20" : "hidden items-end"}
                        `}>
                        <div className={`w-max h-max mb-[20px]
                            ${openNav ? "flex-col" : "flex items-center justify-end"}
                            `}>
                            <div className={`h-max w-max
                                ${openNav ? "mb-[20px]" : ""}
                                `}>
                                <h2 className="text-primary text-xl">Business Hours:</h2>
                                <p className="text-accent text-base">Monday - Friday: 7:30AM - 5:30PM</p>
                            </div>
                            <div className={`h-max w-max 
                                ${openNav ? "ml-0" : "ml-[40px]"}
                                `}>
                                <h2 className="text-primary text-xl">Call Us:</h2>
                                <p className="text-accent text-base">+234 806 769 1079</p>
                            </div>
                        </div>
                        <div className="w-max h-max flex items-center">
                            <nav className="h-max w-max">
                                <ul className={`h-max w-max flex 
                                    ${openNav ? "flex-col" : "items-center"}
                                    `}>
                                    <li onClick={linkClicked} className={`h-max w-max 
                                        ${openNav ? "ml-0 mb-[20px]" : "ml-[40px]"}
                                        `}>
                                        <Link href={"/"} className="text-accent text-base hover:text-primary hover:underline transition-all duration-300">Home</Link>
                                    </li>
                                    <li onClick={linkClicked} className={`h-max w-max 
                                        ${openNav ? "ml-0 mb-[20px]" : "ml-[40px]"}
                                        `}>
                                        <Link href={"/about"} className="text-accent text-base hover:text-primary hover:underline transition-all duration-300">About Us</Link>
                                    </li>
                                    <li onClick={linkClicked} className={`h-max w-max 
                                        ${openNav ? "ml-0 mb-[20px]" : "ml-[40px]"}
                                        `}>
                                        <Link href={"/services"} className="text-accent text-base hover:text-primary hover:underline transition-all duration-300">Services</Link>
                                    </li>
                                    <li onClick={linkClicked} className={`h-max w-max 
                                        ${openNav ? "ml-0 mb-[20px]" : "ml-[40px]"}
                                        `}>
                                        <Link href={"/gallery"} className="text-accent text-base hover:text-primary hover:underline transition-all duration-300">Gallery</Link>
                                    </li>
                                    <li onClick={linkClicked} className={`h-max w-max 
                                        ${openNav ? "ml-0 mb-[20px]" : "ml-[40px]"}
                                        `}>
                                        <Link href={"/contact"} className="text-accent text-base hover:text-primary hover:underline transition-all duration-300">Contact Us</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className={`h-max w-max
                                ${openNav ? "fixed top-[90%] left-0 w-screen h-max px-4" : ""}
                                `}>
                                <button onClick={seeForm} className={`hover:text-neutralDark hover:bg-primary transition duration-500 border-[2px] border-primary px-[15px] py-[10px] 
                                    ${openNav ? "w-full text-center text-offBlack bg-primary rounded ml-0" : "text-primary bg-transparent rounded-full ml-[40px]"}
                                    `}>Contact Us</button>
                            </div>
                        </div>
                    </div>
                    <div onClick={hamClicked} className={`h-[40px] w-[40px] relative
                        ${openNav ? "z-[999]" : "sm:hidden"}
                        `}>
                        <span className={`ham absolute after:absolute before:absolute before:content-[''] after:content-[''] before:top-[5px] after:top-[-5px] before:left-0 after:left-0 before:h-[2px] after:h-[2px] before:w-[30px] after:w-[30px] before:bg-accent after:bg-accent top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[2px] w-[30px] bg-accent
                            ${openNav ? "active" : ""}
                            `}></span>
                    </div>
                </div>
            </div>
        </header>
        <section id="booking" className={formVisible}>
            <div className="w-full flex items-center justify-end z-30" style={{ height: '60px' }}>
                <div onClick={cancelForm} className="relative cursor-pointer z-30" style={{ width: '40px', height: '40px' }}>
                    <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-accent rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
                    <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-accent -rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
                </div>
            </div>
            <div className="w-full flex items-center justify-center z-[999]" style={{ height: 'calc(100vh - 60px)' }}>
                <Contact />
            </div>
        </section>
        </>
     );
}
 
export default Header;