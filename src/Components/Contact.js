import React from 'react';
import '../styles/Contact.css';

import backgroundPic from "../Images/cute.jpg";
import location from "../Images/location.png";
import phone from "../Images/phone.jpg";
import email from "../Images/email.jpg";
import Footer from './Footer';

const Contact = () => {
    const giveMessage = () => {
        alert("There was a technical problem. You can use the number or the email on the screen to contact the office direct")
    }
    return (
        <>
    <div className="contact-background" style={{backgroundImage: `url(${ backgroundPic})`}}>
            <h1>Get in touch <br></br> with us</h1>
            </div>
            
            <div className="intouch">
                <h1>contact us </h1> 
                
            </div>
        
        <div className="contact-details">
                
                <div className="location">
                <img src={location} alt=""/>
                <h1> Kakuma Town <br></br> compound 3 <br></br> Windle office </h1> 
                </div>

                <div className="phone">
                <img src={phone} alt=""/>
                    <h1> +254708499451 <br></br>
                        +254794322276 <br></br>+254742388732
                        <br></br>+254757116287</h1> 
                </div>

                <div className="email">
                    <img src={email} alt="" />
                    <h1>abriyusif20@gmail.com <br></br>
                        aljabanaelizabeth444@gmail.com<br></br>
                        aterchan54@gmail.com<br></br>
                        tayarchuol@gmail.com
                    </h1> 
                </div>
            
            </div>
            
            <div className="contact-message">
                <h1>Contact us</h1>
            </div>
            <div className="contact-form">
            <form mailto="abriyusif20@gmail.com">
                <label htmlFor="name">Name</label> <br></br>
                <input type="text" className="form-control" /><br></br><br></br>
                <label htmlFor="email">Email</label><br></br>
                <input type="text" className="form-control" /><br></br><br></br>
                <label htmlFor="subject">Subject</label><br></br>
                <input type="text" className="form-control" /><br></br>
                <label htmlFor="message">Message</label><br></br>
                
                <textarea></textarea>

                <div className='btnSubmitContainer'>
                    <button type='submit' className='btnSubmitForm' onClick={giveMessage}>Submit</button>
                </div>
            </form>
            </div>

        <Footer/>

        </>
    )
}

export default Contact