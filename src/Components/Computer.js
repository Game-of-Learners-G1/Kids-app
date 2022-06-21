import React from 'react';
import { SayButton } from 'react-say-fork';
import Footer from './Footer';

const Computer = () => {
  //parts of the computer, description and images
  const parts = [
    {
      id: 1, 
      name: "Monitor",
      description: "CPU is the central processing unit of the computer",
      image: "https://m.media-amazon.com/images/I/71VjLs6obgL.jpg"
    },

    {
      id: 2,
      name: "Desktop",
      description: "Motherboard is the main board of the computer",
      image: "https://i.pcmag.com/imagery/reviews/038cr8N8ecBWQ8AtPgMhOyX-1.fit_lim.size_625x365.v1637625492.jpg"
    },

    {
      id: 3,
      name: "Keyboard",
      description: "RAM is the random access memory of the computer",
      image: "https://www.ubuy.ke/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjE4TCtWLUkzb0wuX0FDX1NMMTUwMF8uanBn.jpg"
    },

    { id: 4, name: "Mouse", description: "GPU is the graphics processing unit of the computer", image: "https://5.imimg.com/data5/VU/JN/MY-59867677/computer-mouse-500x500.jpg" },

    {
      id: 5,
      name: "Power Cable",
      description: "https://pictures-kenya.jijistatic.com/16820411_mmexport1599819368519_180x240.jpg",
      image: "https://images.yaoota.com/aWtsB1zPj8ZhYuHXceOOYeysV0I=/trim/yaootaweb-production-ke/media/crawledproductimages/1d74aaeba912488a033c416730500c636538b791.jpg"
    },
  

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