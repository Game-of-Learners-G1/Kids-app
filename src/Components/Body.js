import React from "react";

const Body = () => {
  // Parts of the body of the kid with images from www.123rf.com
  const bodyParts = [
        {
          id: 1,
          name: "Head",
          image: "https://previews.123rf.com/images/vbaleha/vbaleha1308/vbaleha130800303/21706143-surprised-little-girl-kid-with-hands-on-her-head-isolated-on-white-background.jpg?fj=1"
        },
        {
          id:1,
          name:"Shoulder",
          image:"https://image.shutterstock.com/image-photo/6-7-years-old-little-600w-399516334.jpg"
        }
      ]

  return(
    <div>
    <h1>Body</h1>
      {/* Mapping through the bodyParts array */ }
    <div div style = {{
      // Displaying grid of 2 columns
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "10px",
    }}
      >
{
  bodyParts.map(part => {
    return <Part key={part.id} part={part} />
  })
}
      </div >
    </div >
  );
};

export default Body;

const Part = ({ part }) => {
  return (
    <div>
      <h3>{part.name}</h3>
      <img
        src={part.image}
        style={{
          height: "200px",
          width: "200px",
        }}
      />
    </div>
  );
};
