import React from 'react';
import './Contact.css';

const backgroundPic = new URL("../Images/cute.jpg", import.meta.url);
const location = new URL("../Images/location.png", import.meta.url);
const phone = new URL("../Images/phone.jpg", import.meta.url);
const email = new URL("../Images/email.jpg", import.meta.url);
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
        </>
    )
}

export default Contact