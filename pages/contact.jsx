import Head from "next/head";
import { useState } from "react";
import axios from "axios";

export default function Contact() {

  const [contactError, setContactError] = useState('');
  const [contactSuccess, setContactSuccess] = useState('');
  const [formData, setFormData] = useState({
      'name': '',
      'email' : '',
      'message' : '',
  })

  const handleChanged = (e) => {
      const { name, value} = e.target;
      setFormData({...formData, [name]: value});
  }

  const formSubmitted = async (e) => {
    e.preventDefault();

    let nameVal = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
    let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let errorValue = false;
    if (!nameVal.test(formData.name)){
        setContactError('Please enter a valid name');
        errorValue = true;
    }else{
        setContactError('');

        if (!emailVal.test(formData.email)){
            setContactError('Please enter a valid email');
            errorValue = true;
        }else{
            setContactError('');
        }
    }

    if (!errorValue){
        try{
            let url = "https://backend.palmhavenhotel.com/message.php";

            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type' : 'application/json'
                },withCredentials: true,
            });

            console.log(response.data);
            
            if (response.data.status === 'error'){
                setBookingError(response.data.message);
                errorValue = true;
            }else{
                setBookingError('');
            }

            if (response.data.status === 'successful'){
                setContactSuccess('Successful');
                counterStart();
            }
        }catch(error){
            console.log("Error submitting form:", error);
        }
    }
  }

  function counterStart(){
      setTimeout(() => {
          setContactSuccess('');
      }, 5000);
  }

  return (
    <>
      <Head>
        <title>Contact Us | Enermill Power Limited</title>
      </Head>
      <section className="relative z-10 w-screen min-h-screen flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-5xl bg-transparent rounded-lg flex flex-col md:flex-row overflow-hidden">
          {/* Left: Hotel Details */}
          <div className="w-full md:w-1/2 bg-transparent text-offWhite flex flex-col justify-center p-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">Contact Information</h2>
            <p className="mb-6 text-offBlack">
              Enermill Power Limited<br />
              Block 15 Flat 4, Millennium Housing
              Estate, Ijaiye, Ojokoro, Lagos State, Nigeria
            </p>
            <div className="mb-4 flex items-center">
              <i className="fa fa-phone mr-2 text-primary"></i>
              <span className="text-offBlack">+234 (816) 9537 714</span>
            </div>
            <div className="mb-4 flex items-center">
              <i className="fa fa-envelope mr-2 text-primary"></i>
              <span className="text-offBlack">enermillpower@gmail.com</span>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fa fa-facebook text-3xl text-primary"></i>
              </a>
              <a href="https://wa.me/2348067691079" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fa fa-whatsapp text-3xl text-primary"></i>
              </a>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl text-primary font-bold mb-4 text-center md:text-left">Get in Touch</h2>
            <p className="text-base text-offBlack mb-8 text-center md:text-left">
              We'd love to hear from you! Please fill out the form below and our team will get back to you as soon as possible.
            </p>
            {contactError && (
              <div className="my-2 w-full text-center py-2 h-max rounded text-base text-accent bg-red-500">
                {contactError}
              </div>
            )}

            {contactSuccess && (
              <div className="my-2 w-full text-center py-2 h-max rounded text-base text-accent bg-green-500">
                {contactSuccess}
              </div>
            )}
            <form
              className="flex flex-col gap-5"
              onSubmit={formSubmitted}
            >
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChanged}
                className="px-4 py-3 rounded border border-grey text-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChanged}
                className="px-4 py-3 rounded border border-grey text-black"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChanged}
                className="px-4 py-3 rounded border border-grey text-black"
                rows={5}
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-offWhite rounded transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
} 