import React from "react";
import { SayButton } from "react-say-fork";
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
      image:"https://image.slidesharecdn.com/bodyparts-100506065540-phpapp02/95/body-parts-9-728.jpg?cb=1273129125"
    },
    {
      id: 5,
      name: "Knee",
      image: "https://www.sarahkeyphysiotherapy.com/images/kneepain.jpg"
    },
    {
      id:6,
      name:"Ear",
      image:"https://www.drovillafane.com/imagenes/otoplastia02.jpg"
},
{
  id: 7,
  name: "Stomach",
  image: "https://th.bing.com/th/id/R.642cedb6cc593efa8e88b166d01cf112?rik=pivepY2GV3BtkQ&riu=http%3a%2f%2fmedia.gettyimages.com%2fphotos%2ffat-boy-overweight-picture-id517852215%3fs%3d170667a%26w%3d1007&ehk=Hju8IJiuB5nl83B%2fG446rJmFY%2fCByZ5yX%2fwmK3eXrFU%3d&risl=&pid=ImgRaw&r=0"
},
{
  id:8,
  name:"Eye",
  image:"https://th.bing.com/th/id/R.91e939f3fa7e166ad06bf2412b74ab79?rik=2NwU5P%2fxKOV31g&riu=http%3a%2f%2f4.bp.blogspot.com%2f-EISeqH6y3YM%2fUk2bMPb_NuI%2fAAAAAAAAHn4%2f0UKSZF5QtWw%2fs1600%2fhow-to-photograph-human-eye.jpg&ehk=s0lYkiHBuA5tMzpFq4VXmAyqd4JPjJOk9IJ7kVA3VTM%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      id: 9,
      name: "Nose",
      image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/321810_2200-800x1200.jpg"
    },
    {
      id:10,
      name:"Mouth",
      image:"https://th.bing.com/th/id/R.a535f7cd639fc9f93854bc441a352347?rik=JprTdzuwrdnosg&riu=http%3a%2f%2fthumbs.dreamstime.com%2fz%2fchild-open-mouth-399713.jpg&ehk=t2Gl2dKHM9kNV3qlVUsIBrSUlTnOcU%2fx0wda2plN5zQ%3d&risl=&pid=ImgRaw&r=0"
},
{
  id: 11,
  name: "Finger",
  image:"https://th.bing.com/th/id/R.d8b13ada4550544ca6b4b93e014a3f19?rik=6AVoHqrf3yT8wQ&pid=ImgRaw&r=0"
},
{
  id:12,
  name:"Foot",
  image:"https://th.bing.com/th/id/R.92dc68ecd987f120c7ddc9583a3fa618?rik=HaZevHQD2WmhIg&riu=http%3a%2f%2ffarm2.staticflickr.com%2f1139%2f1112152343_2f3797d064_z.jpg%3fzz%3d1&ehk=of%2fdJRCy%2b1UVeY%2bww22Dhd7%2fBeUo21tc0OVA5bsblZg%3d&risl=&pid=ImgRaw&r=0"
},
{
  id: 13,
  name: "Hand",
  image:"https://cdn0.iconfinder.com/data/icons/body-parts-cartoon-style/512/al362_16-512.png"
},
{
  id:14,
  name:"Thigh",
  image:"https://th.bing.com/th/id/OIP.DMMoa7UYJxO0ezoMUDPsVwHaHa?pid=ImgDet&rs=1"
},
{
id: 15,
name: "Toes",
image: "https://th.bing.com/th/id/R.30ed65936697288526cb32fb70e78dce?rik=44yRBr2H%2fgvrSw&riu=http%3a%2f%2fwww.abcteach.com%2ffree%2ft%2ftoesrgb.jpg&ehk=5a5GJdXOY3DygUEqT%2fd%2fjQPIeOVlPaALUX4xX%2byEY4E%3d&risl=&pid=ImgRaw&r=0"
},
{
id:16,
name:"Body parts",
image:"https://images-eu.ssl-images-amazon.com/images/I/910u7zY9IlL.png"
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
          bodyParts.map(part => (
            <SayButton
              speak={part.name}
              pitch={3.5}
              rate ={0.4}
            >
    <Part key={part.id} part={part} />
      </SayButton>
          ))
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
      alt=""/>
    </div>
  );
};
