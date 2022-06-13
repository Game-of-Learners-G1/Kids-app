import React from 'react';
import './About.css';
import onlineEducation from "../Images/online-education.jpg";
import Students from "../Images/Students.png";
import Person from "../Images/Person.png";


// const onlineEducation = new URL("../Images/online-education.jpg", import.meta.url);
// const Students = new URL("../Images/Students.png", import.meta.url);
// const Person = new URL("../Images/Person.jpg", import.meta.url);



const About = () => {
  return (
    <>
    <div class="about">
      <div>
      <h1 className='header'>ABOUT US</h1><br></br>
      <h2 className='header2'>Welcome to course correct </h2><br></br>
      <p className='main'>We are the Italanta technology community our mission<br></br>
        is to transform the CBC refugee students to be able to<br></br>
        learn through the modern technology.And we do that by <br></br>
        providing an online platform for refugees to learn And<br></br>
       improve their skills.This program is open for kids from PP1,<br></br>
        PP2 and PP3.
      </p>
      </div>
      <div>
      <img src={onlineEducation} alt=""></img>
      </div>
    </div><br></br>
      
    <div className='mission'>
    <img className='img' src={Students} alt=""></img>
    <div >
      <h1 className='part-1'>OUR MISSION</h1>
     <p className='note-0'>We aim to empower refugees by teaching <br></br>
     them the necessary knowledge and skills<br></br> 
     for easy reading and understanding </p>
     </div>
      <div>
     <h1 className='part-2'>OUR VISION</h1>
      <p className='note'>We believe in an IT world where everyone<br></br>
       has access to open knowledge and open <br></br>
       education, in order to participate actively <br></br>
       in society.</p>

    </div>
    </div><br></br>

    <div>
    <h1 className='team'>OUR TEAM</h1>
      <div className='person'>
        <img src={Person} alt=""></img>
       <img src={Person} alt=""></img>
        <img src={Person} alt=""></img>
        <img src={Person} alt=""></img>
        
      </div> 
      <div>
        <h3 className='line-one'>Aljabana Elizabeth</h3>
      <h3>Abri Yusif Samana</h3>
      <h3>Chuol Tayar</h3>
      <h3>Peter Chan</h3>
      </div>
    </div>
  

    </>

    
  )
}

export default About