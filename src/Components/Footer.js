import React from "react";
import "../styles/Footer.css";

import facebooklogo from "../Images/facebooklogo.png";
import instagramlogo from "../Images/instagramlogo.png";
import gmaillogo from "../Images/gmaillogo.png";
import linkedinlogo from "../Images/linkedinlogo.png";

const Footer = () => {
  const icons = [facebooklogo, instagramlogo, gmaillogo, linkedinlogo];
  return (
    <div className="footer">
      <Left />
      <Right icons={icons}/>
    </div>
  );
};

export default Footer;

const Left = () => {
    //this year
    const year = new Date().getFullYear(); 

  return (
    
    <div className="left">
      <p style={{
        color: "white",
        textAlign: "center"
      }}>
        Course correct exposes your kid to the best interactive learning and <br/>
        also expose them to the latest technologies.
      </p>
      <br />
      <p>Take your kids from zero to hero!</p>
      <br />
      <br />
      <h2 style={{
        color: "white",
        textAlign: "center"
      }} >Copyright©{year}</h2>
      </div>
      
  );
};
const Right = ({icons}) => {
  return (
    <div className="right">
        <h4 style={{
          color:"white"
        }} >Contacts</h4>
      <div className="icons">
        {icons.map((icon, index) => {
          return (
            <div key={index} className="icon">
              
              <img style={{
                width: "30px",
                height: "30px"
              }} src={icon} alt="icon" />
              </div>
          );
        }
        )}
        </div>
      </div>
    
  );
};
