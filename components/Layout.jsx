import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({children}) => {
    return ( 
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="BODANT INNOVATIVE RESOURCE LTD" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="shortcut icon" href="" type="image/x-icon" />
        </Head>
        <Header/>
        <main className="relative after:content-[''] after:absolute h-max after:h-[100%] w-screen after:w-[100%] after:top-0 after:left-0 after:bg-black after:opacity-50">
            {children}
            <div className="fixed top-[90%] left-[85%] sm:left-[95%] z-30">
                <a href="https://wa.me/2348067691079" className="h-max w-max" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <i className="fa fa-whatsapp text-5xl text-green-500"></i>
                </a>
            </div>
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;