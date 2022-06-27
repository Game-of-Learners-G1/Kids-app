import React from 'react';
import { SayButton } from 'react-say-fork';
import Footer from './Footer';

const Computer = () => {
  //parts of the computer, description and images
  const parts = [
    {
      id: 1, 
      name: "Monitor",
      description: "Is an electronic device with a screen used for display (as of television pictures or computer information",
      image: "https://m.media-amazon.com/images/I/71VjLs6obgL.jpg"
    },

    {
      id:2,
      name:"Desktop",
      description:" is a computer display area that represents the kinds of objects",
      image:"https://www.kenyacomputershop.co.ke/wp-content/uploads/2020/07/Dell-Inspiron-3280-21.5%E2%80%B3-All-in-One-FHD-Touchscreen-Desktop-Computer-Intel-Core-i5-8265U-1.6GHz-8GB-RAM-1TB-HDD-Windows-10-Home-scaled.jpg"
    },
      

    {
      id: 3,
      name: "Keyboard",
      description: "is an input device used to enter characters and functions into the computer system by pressing buttons, or keys",
      image: "https://www.ubuy.ke/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjE4TCtWLUkzb0wuX0FDX1NMMTUwMF8uanBn.jpg"
    },

    { 
      id: 4,
      name: "Mouse", 
      description: "is a computer input device used to move a cursor around a screen", 
      image: "https://5.imimg.com/data5/VU/JN/MY-59867677/computer-mouse-500x500.jpg" 
    },

    {
      id: 5,
      name: "Power Cable",
      description: " an electrical cable usually held together with an overall sheath",
      image: "https://images.yaoota.com/aWtsB1zPj8ZhYuHXceOOYeysV0I=/trim/yaootaweb-production-ke/media/crawledproductimages/1d74aaeba912488a033c416730500c636538b791.jpg"
    },
  {
    id:6,
    name:"Central processing unit",
    description:"The component of a computer system that controls the interpretation and execution of instructions",
    image:"https://www.computerhope.com/jargon/p/processor.png"
  },

  {
    id:7,
    name:"Motherboard",
    description:"it's the main circulated board that ties the computer's components together at one spot and allows them to talk to each other.",
    image:"https://www.tutorialspoint.com/computer_fundamentals/images/mother_board.jpg"
  },

  {
    id:8,
    name:"Random Access Unit",
    description:"internal memory of the CPU for storing data, program, and program result",
    image:"https://images.easytechjunkie.com/dram-module.jpg"
  },

  {id:9,
    name:"Hard Disk Drive,HDD",
    description:"data storage device that stores and retrieves digital data",
    image:"https://guide.directindustry.com/wp-content/uploads/40449-8972769.jpg"

  },

  {
    id:10,
    name:"Video Card",
    description:" integrated circuit that generates the video signal sent to a computer display",
    image:"https://www.lifewire.com/thmb/scr-85uRvQFMYCSf9cmZEIlj2Zs=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/xfx-amd-radeon-hd-5450-video-card-56a6f9ce5f9b58b7d0e5cc0d.jpg"
  }

  ];
  return (
    <div>
      <h1>Let's Learn Parts Of the Body</h1>
      {/* Mapping through the bodyParts array */}
      <div div style={{
        // Displaying grid of 2 columns
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
      }}
      >
        {
          parts.map(part => (
            <SayButton
              speak={part.name}
              pitch={3.5}
              rate={0.4}
            >
              <ComputerPart key={part.id} part={part} />
            </SayButton>
          ))
        }
      </div >
      <Footer />
    </div >
  );
};

export default Computer;

const ComputerPart = ({ part }) => {
  return (
    <div>
      <h3>{part.name}</h3>
      <img
        src={part.image}
        style={{
          height: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      alt=""/>
    </div>
  );
};