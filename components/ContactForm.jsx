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

                        if (!formData.message){
                            setBookingError('Message required');
                            errorValue = true;
                        }else{
                            setBookingError('');
                        }
                    }
                }
            }
        }

        if (!errorValue){
            try{
                let url = "https://backend.enermillpower.com/message.php";

                const response = await axios.post(url, formData,{
                    headers: {
                        'Content-Type': 'application/json',
                    },withCredentials: true,
                })
                
                console.log(response.data);

                if (response.data.status === 'error'){
                    
                }

                if (response.data.status === 'success'){
                    setContactSuccess('Successful');
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
                            <label htmlFor="phone" className="text-grey mb-1 hidden sm:block">Phone:</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChanged} id="phone" placeholder="Phone Number" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/> 
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-end justify-end" style={{width: '98%'}}>
                            <label htmlFor="location" className="text-grey mb-1 hidden sm:block">Location:</label>
                            <select name="location" value={formData.location} id="location" onChange={handleChanged} className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}>
                                <option value="">-- Select Location --</option>
                                <option value="Abia">Abia</option>
                                <option value="Adamawa">Adamawa</option>
                                <option value="Akwa_ibom">Akwa Ibom</option>
                                <option value="Anambra">Anambra</option>
                                <option value="Bauchi">Bauchi</option>
                                <option value="Bayelsa">Bayelsa</option>
                                <option value="Benue">Benue</option>
                                <option value="Borno">Borno</option>
                                <option value="Cross River">Cross River</option>
                                <option value="Delta">Delta</option>
                                <option value="Ebonyi">Ebonyi</option>
                                <option value="Edo">Edo</option>
                                <option value="Ekiti">Ekiti</option>
                                <option value="Enugu">Enugu</option>
                                <option value="Gombe">Gombe</option>
                                <option value="Imo">Imo</option>
                                <option value="Jigawa">Jigawa</option>
                                <option value="Kaduna">Kaduna</option>
                                <option value="Kano">Kano</option>
                                <option value="Katsina">Katsina</option>
                                <option value="Kebbi">Kebbi</option>
                                <option value="Kogi">Kogi</option>
                                <option value="Kwara">Kwara</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Nasarawa">Nasarawa</option>
                                <option value="Niger">Niger</option>
                                <option value="Ogun">Ogun</option>
                                <option value="Ondo">Ondo</option>
                                <option value="Osun">Osun</option>
                                <option value="Oyo">Oyo</option>
                                <option value="Plateau">Plateau</option>
                                <option value="Rivers">Rivers</option>
                                <option value="Sokoto">Sokoto</option>
                                <option value="Taraba">Taraba</option>
                                <option value="Yobe">Yobe</option>
                                <option value="Zamfara">Zamfara</option>
                                <option value="FCT Abuja">FCT (Abuja)</option>
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