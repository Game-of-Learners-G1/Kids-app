import React from 'react';
import Footer from './Footer';

const Fruits = () => {
  const allFruits = [
    {
      id: 1,
      fruitName: 'Orange',
      fruitImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg'
    },
    {
      id: 2,
      fruitName: 'Lemon',
      fruitImage: 'https://www.herbazest.com/imgs/3/f/2/9710/lemon.jpg'
    },
    {
      id: 3,
      fruitName: 'Mango',
      fruitImage: 'https://miyongafreshgreens.co.ke/wp-content/uploads/2019/05/mangoes.jpg'
    },
    {
      id: 4,
      fruitName: 'Banana',
      fruitImage: 'https://images.heb.com/is/image/HEBGrocery/000377497'
    },
    {
      id: 5,
      fruitName: 'Avocado',
      fruitImage: 'https://news.harvard.edu/wp-content/uploads/2022/04/gil-ndjouwou-cueV_oTVsic-unsplash-1200x800.jpg'
    },
    {
      id: 6,
      fruitName: 'Guava',
      fruitImage: 'https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/003/978/original/270435530_a82f19bb63_z.jpg'
    },
    {
      id: 7,
      fruitName: 'Pawpaw',
      fruitImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt17-7k8oV7lMYzIEofWm6-8SQEngcP14QNA&usqp=CAU'
    },
    {
      id: 8,
      fruitName: 'Watermelon',
      fruitImage: 'https://www.seeds-gallery.eu/5488-large_default/400-watermelon-seeds-crimson-sweet.jpg'
    },
    {
      id: 9,
      fruitName: 'Pineapple',
      fruitImage: 'https://thinkorg.ap-south-1.linodeobjects.com/uploads/products/meta/qXxX7CCRSUVZg5wLAVvSTPTOrFOoGLzvJHvwQu0V.jpeg'
    },
    {
      id: 10,
      fruitName: 'Apple',
      fruitImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRiXjrGJEHnS7THBFnoXvQt20J3oUI49WXw&usqp=CAU'
    }
  ]
  return (
    <div>
      <h1> Fruits </h1>
      <div   style={{
        // display in grid of five
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: "10px"
        
      }}>
        {allFruits.map((fruits) => {
          return < Fruit key={fruits.id} fruits= {fruits}/>
          
          
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default Fruits;

const Fruit = ({ fruits }) => {
  return (
    <div>
      <h3 style={{ cursor: "pointer"}}>{fruits.fruitName}</h3>
      <img
        src={fruits.fruitImage}
        style={{
          height: "200px",
          width: "200px",
          cursor: "pointer",

        }}
      />
    </div>
  );
}