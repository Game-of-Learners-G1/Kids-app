import React from "react";
import Footer from "./Footer";

const Body = () => {
  // Parts of the body of the kid with images from www.123rf.com
  const bodyParts = [
        {
          id: 1,
          name: "Head",
          image: "https://previews.123rf.com/images/vbaleha/vbaleha1308/vbaleha130800303/21706143-surprised-little-girl-kid-with-hands-on-her-head-isolated-on-white-background.jpg?fj=1"
        },
        {
          id:2,
          name:"Shoulder",
          image:"https://image.shutterstock.com/image-photo/6-7-years-old-little-600w-399516334.jpg"
    },
    {
      id: 3,
      name: "Leg",
      image: "https://d1pra95f92lrn3.cloudfront.net/media/thumb/8542_fit512.jpg"
    },
    {
      id:4,
      name:"Arm",
      image:"https://dictionary.cambridge.org/images/thumb/arm_noun_002_01564.jpg"
    },
    {
      id: 5,
      name: "Head",
      image: "https://previews.123rf.com/images/vbaleha/vbaleha1308/vbaleha130800303/21706143-surprised-little-girl-kid-with-hands-on-her-head-isolated-on-white-background.jpg?fj=1"
    },
    {
      id:6,
      name:"Shoulder",
      image:"https://image.shutterstock.com/image-photo/6-7-years-old-little-600w-399516334.jpg"
},
{
  id: 7,
  name: "Head",
  image: "https://previews.123rf.com/images/vbaleha/vbaleha1308/vbaleha130800303/21706143-surprised-little-girl-kid-with-hands-on-her-head-isolated-on-white-background.jpg?fj=1"
},
{
  id:8,
  name:"Shoulder",
  image:"https://image.shutterstock.com/image-photo/6-7-years-old-little-600w-399516334.jpg"
    },
    {
      id: 9,
      name: "Head",
      image: "https://previews.123rf.com/images/vbaleha/vbaleha1308/vbaleha130800303/21706143-surprised-little-girl-kid-with-hands-on-her-head-isolated-on-white-background.jpg?fj=1"
    },
    {
      id:10,
      name:"Shoulder",
      image:"https://image.shutterstock.com/image-photo/6-7-years-old-little-600w-399516334.jpg"
},
{
  id: 11,
  name: "Head",
  image: "https://previews.123rf.com/images/vbaleha/vbaleha1308/vbaleha130800303/21706143-surprised-little-girl-kid-with-hands-on-her-head-isolated-on-white-background.jpg?fj=1"
},
{
  id:12,
  name:"Shoulder",
  image:"https://image.shutterstock.com/image-photo/6-7-years-old-little-600w-399516334.jpg"
},
{
  id: 13,
  name: "Head",
  image: "https://previews.123rf.com/images/vbaleha/vbaleha1308/vbaleha130800303/21706143-surprised-little-girl-kid-with-hands-on-her-head-isolated-on-white-background.jpg?fj=1"
},
{
  id:14,
  name:"Shoulder",
  image:"https://image.shutterstock.com/image-photo/6-7-years-old-little-600w-399516334.jpg"
},
{
id: 15,
name: "Head",
image: "https://previews.123rf.com/images/vbaleha/vbaleha1308/vbaleha130800303/21706143-surprised-little-girl-kid-with-hands-on-her-head-isolated-on-white-background.jpg?fj=1"
},
{
id:16,
name:"Shoulder",
image:"https://image.shutterstock.com/image-photo/6-7-years-old-little-600w-399516334.jpg"
}
      ]

  return(
    <div>
    <h1>Let'ss Learn Parts Of the Body</h1>
      {/* Mapping through the bodyParts array */ }
    <div div style = {{
      // Displaying grid of 2 columns
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px",
    }}
      >
{
  bodyParts.map(part => {
    return <Part key={part.id} part={part} />
  })
}
      </div >
      <Footer/>
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
          cursor: "pointer",
        }}
      />
    </div>
  );
};
