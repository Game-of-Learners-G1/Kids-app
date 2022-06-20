import React from 'react';
import Footer from './Footer';
import { SayButton } from 'react-say-fork';


const Shapes = () => {
  const allShapes = [
    {
      id: 1,
      shapeName: 'Circle',
      shapeImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/2048px-Red_circle.svg.png',
      shapeDescription: 'circle is rounded figure'
    },
    {
      id: 2,
      shapeName: 'Oval',
      shapeImage: 'https://www.pikpng.com/pngl/m/99-999978_oval-shape-logo-m-clipart.png',
        shapeDescription: ''
      },
    {
    id: 3,
    shapeName: 'Square',
    shapeImage: 'https://graphcardapp.files.wordpress.com/2012/11/square.png',
      shapeDescription: 'All sides of a square are equal'
    },
    {
      id: 4,
      shapeName: 'Triangle',
      shapeImage: 'https://logodix.com/logo/627486.png',
      shapeDescription: 'a plane figure with three straight sides and three angles.'
    },
    {
    id: 5,
    shapeName: 'Rectangle',
    shapeImage: 'https://cdn.kastatic.org/ka-perseus-graphie/42532907ceb2fa2f9a747335c53fa61daa0c30d8.svg',
      shapeDescription: ' a four sided-polygon, having all the internal angles equal to 90 degrees. '
    },
    
    {
      id: 6,
      shapeName: 'Star',
      shapeImage: 'https://st.depositphotos.com/1795881/1619/i/600/depositphotos_16199827-stock-photo-3d-symbol.jpg',
      shapeDescription: ' a self-intersecting equilateral and equiangular polygon.'
    },
    {
    id: 7,
    shapeName: 'Diamond',
    shapeImage: 'https://static5.depositphotos.com/1029500/392/i/600/depositphotos_3929513-stock-photo-diamond.jpg',
      shapeDescription: 'a solid form of the element carbon with its atoms arranged in a crystal structure called diamond cubic.'
    },

  {
    id: 8,
    shapeName: 'Rhombus',
    shapeImage: 'https://qph.cf2.quoracdn.net/main-qimg-aa49c9e1d225f3b7cfa9bbd84fb5f5c0',
      shapeDescription: ' a rhombus is a type of quadrilateral.'
    },
{
  id: 9,
  shapeName: 'Semi-Circle',
  shapeImage: 'https://us.123rf.com/450wm/cgdeaw/cgdeaw1904/cgdeaw190400295/121201810-red-semicircle-basic-simple-shapes-isolated-on-white-background-geometric-semicircle-icon-2d-shape-s.jpg',
    shapeDescription: 'a half of a circle or of its circumference.'
  }, {
    id: 10,
    shapeName: 'Crescent',
    shapeImage: 'https://clipart.world/wp-content/uploads/2020/10/Crescent-Moon-clipart-transparent.png',
      shapeDescription: 'the curved sickle shape of the waxing or waning moon.'
    },
    {
      id: 11,
      shapeName: 'Cross',
      shapeImage: 'https://www.pngfind.com/pngs/m/45-452315_pink-red-cross-clip-art-cross-hd-png.png',
        shapeDescription: 'a t- or x-like figure, where one line crosses another at a perpendicular angle. '
      },
  {
    id: 12,
    shapeName: 'Pentagon',
    shapeImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2Vsu9DInpHkkX5h3hZAOoQveYDZ4B1zbdTIZ2pUCeHdxNPjP1HhSorsvcUVdtmmwkmE&usqp=CAU',
      shapeDescription: ' a geometrical shape, which has five sides and five angles.'
    },
    {
      id: 13,
      shapeName: 'Hexagon',
      shapeImage: 'https://studysite.org/dictionary/images/H/hexagon.jpg',
        shapeDescription: 'a hexagon is a six-sided polygon or 6-gon. '
      },
      {
        id: 14,
        shapeName: 'Arrow',
        shapeImage: 'https://i.stack.imgur.com/Y4iNM.jpg',
          shapeDescription: ' a triangle, chevron, or concave kite, usually affixed to a line segment or rectangle'
        },
{
id: 15,
shapeName: 'Octagon',
shapeImage: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shape_octagon.png',
  shapeDescription: ' an eight-sided polygon or 8-gon. '
},
{
  id: 16,
  shapeName: 'Decagon',
  shapeImage: 'https://cdn.shopify.com/s/files/1/2009/8293/products/DC200.jpg?v=1575932398',
    shapeDescription: ' a ten-sided polygon or 10-gon. '
  }, {
    id: 17,
    shapeName: 'Pie',
    shapeImage: 'https://i.stack.imgur.com/tNrqI.png',
      shapeDescription: 'Its a sector, the shape enclosed between an arc and the two radii at either end of that arc '
    },
    {
      id: 18,
      shapeName: 'Trapezoid',
      shapeImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkTGdKJDh3OneuaI0x_j_HFKbfpR1TG3yDBrBz-6M1ilAEIqRQ-hDZGs8I6efM0WPPOw&usqp=CAU',
        shapeDescription: ' A quadrilateral with at least one pair of parallel sides'
      },
{
id: 19,
shapeName: 'parallelogram',
shapeImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Simple_parallelogram.svg/1280px-Simple_parallelogram.svg.png',
shapeDescription: 'a simple quadrilateral with two pairs of parallel sides.  '
},
{
id: 20,
shapeName: 'Heart',
shapeImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png',
  shapeDescription: 'a stylized heart with a double rounded top'
},
{
  id: 21,
  shapeName: 'Cube',
  shapeImage: 'https://images.pexels.com/photos/1340185/pexels-photo-1340185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    shapeDescription: 'a symmetrical three-dimensional shape, either solid or hollow, contained by six equal squares.'
  },
  {
    id: 22,
    shapeName: 'Cuboid',
    shapeImage: 'https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/cuboid_icon_xjqa1k.jpg',
      shapeDescription: 'a solid which has six rectangular faces at right angles to each other.'
    },
    {
      id: 23,
      shapeName: 'Cylinder',
      shapeImage: 'http://atlas-content-cdn.pixelsquid.com/stock-images/cylinder-purple-metallic-Q9JPVVE-600.jpg',
        shapeDescription: 'a solid geometrical figure with straight parallel sides and a circular or oval cross section.'
      },
      {
        id: 24,
        shapeName: 'Dodecagon',
        shapeImage: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/12_Sided_Polygon.jpg',
          shapeDescription: 'a dodecagon or 12-gon is any twelve-sided polygon.'
        },
{
id: 25,
shapeName: 'Trapezium',
shapeImage: 'https://1.bp.blogspot.com/--rmycgzN5WE/XrJIfs9sK-I/AAAAAAAAFNk/5cgxVYdfwHwOhzrVTrB3MjPnjjNdn1SwQCLcBGAsYHQ/s1600/trapezoid.png',
shapeDescription: 'a quadrilateral with one pair of sides parallel.'
},
{
id: 26,
shapeName: 'Ellipse',
shapeImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-yS94TJz4EqDz0GFfFc7AyXjPcEBqX7QsM8zI75kEJNQAW-NBS4mXiUp5Or7tbPnjm0&usqp=CAU',
shapeDescription: ' a circle that has been stretched in one direction, to give it the shape of an oval.'
},
{
id: 27,
shapeName: 'QuatTrefoil',
shapeImage: 'https://thumbs.dreamstime.com/b/geometric-figures-quatrefoil-icon-elements-illustration-signs-symbols-can-be-used-web-logo-mobile-app-ui-ux-white-145501416.jpg',
shapeDescription: ' a symmetrical shape which forms the overall outline of four partially overlapping circles of the same diameter.'
},
{
id: 28,
shapeName: 'Trefoil',
shapeImage: 'https://thumbs.dreamstime.com/b/pink-trefoil-basic-simple-shapes-isolated-white-background-geometric-trefoil-icon-d-shape-symbol-trefoil-clip-art-geometric-144602469.jpg',
shapeDescription: ' a graphic form composed of the outline of three overlapping rings'
},
{
id: 29,
shapeName: 'Polygon',
shapeImage: 'https://media.geeksforgeeks.org/wp-content/uploads/20210204192812/c.JPG',
shapeDescription: ' a plane figure enclosed by line segments called sides.'
},
{
id: 30,
shapeName: 'Ring',
shapeImage: 'https://www.topweddingsites.com/wedding-blog/wp-content/uploads/2017/07/wedding-ring.jpg',
shapeDescription: 'The round brilliant cut · '
},
{
id: 31,
shapeName: 'Scalene',
shapeImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUhoyVR8ZZSqRTe1jDHzmK1Fh5qXTX0qCTB-cFFk4N_elWSrFxJcDQ1CTNXfbD4zX1OjI&usqp=CAU',
shapeDescription: ' a triangle having sides unequal in length. '
},
{
id: 32,
shapeName: 'Spiral',
shapeImage: 'https://images.unsplash.com/photo-1530598343134-ee226a2e90e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpcmFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
shapeDescription: 'winding in a continuous and gradually widening (or tightening) curve, either round a central point on a flat plane or about an axis so as to form a cone. '
},
{
id: 33,
shapeName: 'Pyramid',
shapeImage: 'https://www.clipartmax.com/png/middle/274-2743316_24-images-of-solid-pyramid-shape-template-cone-pyramid-3d-shapes.png',
shapeDescription: ' a structure whose outer surfaces are triangular and converge to a single step at the top '
},
{
id: 34,
shapeName: 'Cone',
shapeImage: 'https://images.saymedia-content.com/.image/t_share/MTczODkxNDY3MjY4NDAwOTkz/how-to-develop-a-cone.jpg',
shapeDescription: 'a solid or hollow object which tapers from a circular or roughly circular base to a point.'
},
{
id: 35,
shapeName: 'Prism',
shapeImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyxfI5Aw1cPsGefAIDLkoltTRBeaeIlNXU1yj5DiHTUgnsogDSkwk8Q-rx1-Oau-5LK8&usqp=CAU',
  shapeDescription: ' a polyhedron comprising an n-sided polygon base '
},
{
  id: 36,
  shapeName: 'Dedocahedron',
  shapeImage: 'https://www.researchgate.net/profile/Mehmet-Koca/publication/45924004/figure/fig8/AS:668668291719189@1536434352748/Dodecahedron-represented-by-the-vertices-of-31_Q320.jpg',
    shapeDescription: 'any polyhedron with twelve flat faces'
  },
  {
    id: 37,
    shapeName: 'Icosahedron',
    shapeImage: 'https://www.kidsmathgamesonline.com/images/pictures/shapes/icosahedron.jpg',
      shapeDescription: 'a polyhedron with 20 faces. '
    },
    {
      id: 38,
      shapeName: 'Octahedron',
      shapeImage: 'https://st.depositphotos.com/2036077/3893/i/600/depositphotos_38931407-stock-photo-3d-metal-octahedron.jpg',
        shapeDescription: '  a polyhedron with eight faces. '
      },
{
id: 39,
shapeName: 'sphere',
shapeImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfYvHPtt5M_jCqxyaeeEDuaN2HugMbZUc3darEHc5LdI_S5tCAc6v0VAJ5ufzkADlRjc&usqp=CAU',
  shapeDescription: 'object that is a three-dimensional analogue to a two-dimensional circle'
},
{
  id: 40,
  shapeName: 'Organic shape',
  shapeImage: 'https://100-pics.net/images/answers/en/shapes/shapes_14642_525634.jpeg',
    shapeDescription: 'Organic shapes are irregular and imperfect.'
  },
                             
                       
                                                                                
    

  ]
  return (
    <div>
      <h1>Let's Learn the Shapes</h1>
      <div style = {{
      // Displaying grid of 4 columns
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px",
    }}>
      {allShapes.map((shapes) => {
        return  < Shape key = {shapes.id} shapes = {shapes} />
        
      })}
      </div>
      <Footer />
    </div>
  
  )
}

export default Shapes;

const Shape = ({ shapes }) => {
  return (
    <SayButton
    speak ={shapes.shapeName}
    >
      <h1>{shapes.shapeName}</h1>
      <img
        src={shapes.shapeImage}
        style={{
          height: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      alt = ""/>
      <p>{shapes.shapeDescription}</p>
    </SayButton>
  )
}