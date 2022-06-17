import React from 'react'

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
    shapeName: 'Square',
    shapeImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/800px-Square_-_black_simple.svg.png',
      shapeDescription: 'All sides of a square are equal'
    }
  ]
  return (
    <div>
      <h1>Shapes</h1>
      {allShapes.map((shapes) => {
        return  < Shape key = {shapes.id} shapes = {shapes} />
        
      })}
    </div>
  
  )
}

export default Shapes;

const Shape = ({ shapes }) => {
  return (
    <div>
      <h1>{shapes.shapeName}</h1>
      <img
        src={shapes.shapeImage}
        style={{
          height: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <p>{shapes.shapeDescription}</p>
    </div>
  )
}