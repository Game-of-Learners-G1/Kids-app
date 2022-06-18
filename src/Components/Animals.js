import React from 'react';
import Footer from './Footer';
import { SayButton } from 'react-say-fork';


const Animals = () => {
  const allAnimals = [
    {
      id: 1,
      animalName: 'Cow',
      animalImage: 'https://a-z-animals.com/media/2021/12/Best-farm-animals-cow.jpg'
    },
    {
    id: 2,
    animalName: 'Goat',
    animalImage: 'https://infonet-biovision.org/res/res/files/2319.400x300.jpeg'
    },
    {
      id: 3,
      animalName: 'sheep',
      animalImage: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/66D8/production/_123282362_hi042879001.jpg'
    },
    {
    id: 4,
    animalName: 'Pig',
    animalImage: 'https://cdn.britannica.com/41/9641-004-A8DD825D/Yorkshire-boar.jpg'
    },
    {
      id: 5,
      animalName: 'Dog',
      animalImage: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/580540_mjznrj.jpg'
    },
    {
    id: 6,
    animalName: 'Camel',
    animalImage: 'https://cdn.britannica.com/94/152294-050-92FE0C83/Arabian-dromedary-camel.jpg?q=60'
    },
    {
      id: 7,
      animalName: 'Donkey',
      animalImage: 'https://cdn.britannica.com/68/143568-050-5246474F/Donkey.jpg'
    },
    {
    id: 8,
    animalName: 'Horse',
    animalImage: 'https://c4.wallpaperflare.com/wallpaper/456/192/846/running-horse-wallpaper-preview.jpg'
    }, 
    {
      id: 9,
      animalName: 'Dug',
      animalImage: 'https://lh3.googleusercontent.com/37AmS2mpuM2ViX4QjZaMc9ZSUH00NI8Nd9Q4n5psgClbP8gOxuYc0pveXrOfTgwLdENoKIYCl63Pi1nJRIeKng=s900'
    },
    {
      id: 10,
      animalName: 'Dove',
      animalImage: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Laughing_dove_%28Spilopelia_senegalensis_cambayensis%29.jpg'
    },
    {
      id: 11,
      animalName: 'Pigeon',
      animalImage: 'https://dictionary.cambridge.org/fr/images/thumb/pigeon_noun_004_2044.jpg?version=5.0.243'
    },
    {
      id: 12,
      animalName: 'Lion',
      animalImage: 'https://www.krugerpark.co.za/images/black-maned-lion-shem-compion-786x500.jpg'
    },
    {
      id: 13,
      animalName: 'Giraffe',
      animalImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LBOAqJBIE1mB6IX7cGkwZaH7H-ksUa5hIg&usqp=CAU'
    },
    {
      id: 14,
      animalName: 'Zebra',
      animalImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMui5Nx9fjPu27jC4fdtN6BtPELphNhYdcQ&usqp=CAU'
    },
    {
      id: 15,
      animalName: 'Elephant',
      animalImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSViV5TjGuP_AoD1-n_akXXzwKhpPsPCTGxAg&usqp=CAU'
    },
    {
      id: 16,
      animalName: 'Hippopotamus',
      animalImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOt83pD8XgO6MO6En0FQfY5uAS_B-KMQJizQ&usqp=CAU'
    },
    {
      id: 17,
      animalName: 'Crocodile',
      animalImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOXPGjZ_VI-QlVT6Ca4_NRednf1WCrkiXFA&usqp=CAU'
    },
    {
      id: 18,
      animalName: 'Lizard',
      animalImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfWUzyNSp9DEBzF443Wzmy_-WGzbWzwpH4A&usqp=CAU'
    },
    {
      id: 19,
      animalName: 'Chameleon',
      animalImage: 'https://cff2.earth.com/uploads/2021/09/25155022/13BCA87C-0930-4FAC-B3EB-6B0674DE98B7-scaled.jpeg'
    },
    {
      id: 20,
      animalName: 'Fish',
      animalImage: 'https://image.shutterstock.com/image-photo/isolated-crucian-carp-kind-fish-260nw-454304059.jpg'
    }
  ]
  return (
    <div>
      
      <h1>Let's See Most Types of Animals</h1>
      <div  style={{
        // display in grid of five
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: "10px",
      
      }}>
      {allAnimals.map((animals) => {
      return <Animal key = {animals.id} animals ={animals} />
      })}
      </div>
      <Footer/>
    </div>
  )
}

export default Animals;

const Animal = ({ animals }) => {
  return (
    <div>
      <h3>{animals.animalName}</h3>
      <img
        src={animals.animalImage}
        style={{
          height: "200px",
          width: "200px",
          cursor: "pointer",

        }}
      />
    </div>
  );
}

