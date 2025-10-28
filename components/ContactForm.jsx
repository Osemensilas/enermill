import { useState } from "react";
import axios from "axios";

const ContactForm = () => {

    const [bookingError, setBookingError] = useState('');
    const [contactSuccess, setContactSuccess] = useState('');
    const [formData, setFormData] = useState({
        'fullname': '',
        'email': '',
        'phone': '',
        'location': '',
        'message': '',
    });

    const handleChanged = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const formSubmitted = async (e) => {
        e.preventDefault();

        let nameVal = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        let errorValue = false;

        if (!nameVal.test(formData.fullname)){
            setBookingError('Please enter a valid name');
            errorValue = true;
        }else{
            setBookingError('');

            if (!emailVal.test(formData.email)){
                setBookingError('Please enter a valid email');
                errorValue = true;
            }else{
                setBookingError('');

                if (!formData.phone){
                    setBookingError('Please enter a phone number');
                    errorValue = true;
                }else{
                    setBookingError('');

                    if (!formData.location){
                        setBookingError('Location required');
                        errorValue = true;
                    }else{
                        setBookingError('');
                    }
                }
            }
        }

        if (!errorValue){
            try{
                let url = "https://backend.palmhavenhotel.com/booking.php";

                const response = await axios.post(url, formData,{
                    headers: {
                        'Content-Type': 'application/json',
                    },withCredentials: true,
                })
                
                const {error, msg} = response.data;

                if (msg === 'unsuccessful'){
                    if (error.fullname === 'Name is required'){
                        setBookingError('Name is required');
                    }else{
                        setBookingError('');

                        if (error.fullname === 'Invalid name'){
                            setBookingError('Invalid name');
                        }else{
                            setBookingError('');

                            if (error.email === 'Email address is required'){
                                setBookingError('Email address is required');
                            }else{
                                setBookingError('');

                                if (error.email === 'Invalid email address'){
                                    setBookingError('Invalid email address');
                                }else{
                                    setBookingError('');

                                    if (error.phone === 'Phone number is required'){
                                        setBookingError('Phone number is required');
                                    }else{
                                        setBookingError('');

                                        if(error.phone === "Begin phone number with country's code"){
                                            setBookingError("Begin phone number with country's code");
                                        }else{
                                            setBookingError('');

                                            if (error.location === 'suite/cottage should not be empty'){
                                                setBookingError('suite/cottage should not be empty');
                                            }else{
                                                setBookingError('');

                                                
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if (msg === 'success'){
                    setContactSuccess('Booking successful');
                }
            }catch(error){
                console.log("Error submitting form: ", error);
                setBookingError('An error occurred while submitting your booking. Please try again later.');
            }
        }
    }

    return ( 
        <>
        <div className="w-full sm:w-max h-max z-30 overflow-scroll">
            <form onSubmit={formSubmitted} id="booking-form" action="/" className="h-max bg-accent rounded px-1 sm:px-3 z-30 w-[95%] sm:w-[600px] oveflow-hidden">
                <header className="w-full h-max py-5 mb-2 sm:mb-5 border-b border-grey">
                    <h2 className="text-2xl sm:text-4xl text-neutralLight text-center">Get Quotation</h2>
                </header>
                {bookingError && (<div className="bg-red-500 rounded text-accent text-base w-full h-10 flex justify-center items-center mb-1">
                    {bookingError}
                </div>
                )}
                {contactSuccess && (<div className="bg-green-500 rounded text-accent text-base w-full h-10 flex justify-center items-center mb-1">
                    {contactSuccess}
                </div>
                )}
                <div className="w-full h-max grid grid-cols-1 sm:grid-cols-2 mb-3">
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-start justify-start" style={{width: '98%'}}>
                            <label htmlFor="fullname" className="text-grey mb-1 hidden sm:block">Name:</label>
                            <input type="text" name="fullname" value={formData.fullname} onChange={handleChanged} placeholder="Name" id="fullname" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/> 
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-end justify-end" style={{width: '98%'}}>
                            <label htmlFor="email" className="text-grey mb-1 hidden sm:block">Email:</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChanged} id="email" placeholder="Email" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/>
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-start justify-start" style={{width: '98%'}}>
                            <label htmlFor="adult" className="text-grey mb-1 hidden sm:block">Phone:</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChanged} id="phone" placeholder="Phone Number" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/> 
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-end justify-end" style={{width: '98%'}}>
                            <label htmlFor="suite" className="text-grey mb-1 hidden sm:block">Location:</label>
                            <select type="text" name="suite" value={formData.location} onChange={handleChanged} id="suite" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}>
                                <option value="">-- Select Location --</option>
                                <option value="abia">Abia</option>
                                <option value="adamawa">Adamawa</option>
                                <option value="akwa_ibom">Akwa Ibom</option>
                                <option value="anambra">Anambra</option>
                                <option value="bauchi">Bauchi</option>
                                <option value="bayelsa">Bayelsa</option>
                                <option value="benue">Benue</option>
                                <option value="borno">Borno</option>
                                <option value="cross_river">Cross River</option>
                                <option value="delta">Delta</option>
                                <option value="ebonyi">Ebonyi</option>
                                <option value="edo">Edo</option>
                                <option value="ekiti">Ekiti</option>
                                <option value="enugu">Enugu</option>
                                <option value="gombe">Gombe</option>
                                <option value="imo">Imo</option>
                                <option value="jigawa">Jigawa</option>
                                <option value="kaduna">Kaduna</option>
                                <option value="kano">Kano</option>
                                <option value="katsina">Katsina</option>
                                <option value="kebbi">Kebbi</option>
                                <option value="kogi">Kogi</option>
                                <option value="kwara">Kwara</option>
                                <option value="lagos">Lagos</option>
                                <option value="nasarawa">Nasarawa</option>
                                <option value="niger">Niger</option>
                                <option value="ogun">Ogun</option>
                                <option value="ondo">Ondo</option>
                                <option value="osun">Osun</option>
                                <option value="oyo">Oyo</option>
                                <option value="plateau">Plateau</option>
                                <option value="rivers">Rivers</option>
                                <option value="sokoto">Sokoto</option>
                                <option value="taraba">Taraba</option>
                                <option value="yobe">Yobe</option>
                                <option value="zamfara">Zamfara</option>
                                <option value="fct">FCT (Abuja)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max">
                    <label htmlFor="message" className="text-grey mb-1 hidden sm:block">Message</label>
                    <textarea name="message" value={formData.message} id="message"
                    onChange={handleChanged}
                    placeholder="Type your message here ..."
                    className="max-h-[150px] min-h-[150px] max-w-full min-w-full p-2 outline-none border rounded border-grey" 
                    ></textarea>
                </div>
                <div className="w-full h-max mt-2 py-3 border-t border-grey flex items-center justify-center">
                    <button type="submit" className="w-1/2 h-max bg-primary text-offBlack rounded py-2 text-center">Contact Us</button>
                </div>
            </form>
        </div>
        </>
     );
}
 
export default ContactForm;