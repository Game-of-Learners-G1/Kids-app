import React from 'react';
import '../styles/Contact.css';

import backgroundPic from "../Images/cute.jpg";
import location from "../Images/location.png";
import phone from "../Images/phone.jpg";
import email from "../Images/email.jpg";

const Contact = () => {
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

                <label htmlFor="name">Name</label> <br></br>
                <input type="text" className="form-control" /><br></br><br></br>
                <label htmlFor="email">Email</label><br></br>
                <input type="text" className="form-control" /><br></br><br></br>
                <label htmlFor="subject">Subject</label><br></br>
                <input type="text" className="form-control" /><br></br>
                <label htmlFor="message">Message</label><br></br>
                
                <textarea></textarea>
            </div>

            {/* footer */}
            <div className="svg-details">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230"><path fill="#273036" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,192C480,213,600,235,720,208C840,181,960,107,1080,96C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">

                </path>
                
            
                </svg>
            </div>
            <div className="footer-details">
        <h1>Our text here </h1>
            </div>
        </>
    )
}

export default Contact