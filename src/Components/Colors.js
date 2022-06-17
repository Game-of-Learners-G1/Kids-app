import React from 'react';
import Footer from './Footer';

const Colors = () => {
  // Array of objects of 1000 random colors with readable names
  const colors = [
    { id: 1, name: 'red', color: '#ff0000' },
    { id: 2, name: 'green', color: '#00ff00' },
    { id: 3, name: 'blue', color: '#0000ff' },
    { id: 4, name: 'yellow', color: '#ffff00' },
    { id: 5, name: 'orange', color: '#ffa500' },
    { id: 6, name: 'purple', color: '#800080' },
    { id: 7, name: 'pink', color: '#ffc0cb' },
    { id: 8, name: 'brown', color: '#a52a2a' },
    { id: 9, name: 'black', color: '#000000' },
    { id: 10, name: 'white', color: '#ffffff' },
    { id: 11, name: 'gray', color: '#808080' },
    { id: 12, name: 'cyan', color: '#00ffff' },
    { id: 13, name: 'magenta', color: '#ff00ff' },
    { id: 14, name: 'silver', color: '#c0c0c0' },
    { id: 15, name: 'maroon', color: '#800000' },
    { id: 16, name: 'olive', color: '#808000' },
    { id: 17, name: 'teal', color: '#008080' },
    { id: 18, name: 'navy', color: '#000080' },
    { id: 19, name: 'lime', color: '#00ff00' },
    { id: 20, name: 'aqua', color: '#00ffff' },
    { id: 21, name: 'azure', color: '#f0ffff' },
    { id: 22, name: 'beige', color: '#f5f5dc' },
    { id: 23, name: 'bisque', color: '#ffe4c4' },
    { id: 24, name: 'blanchedalmond', color: '#ffebcd' },
    { id: 25, name: 'blueviolet', color: '#8a2be2' },
    { id: 26, name: 'brown', color: '#a52a2a' },
    { id: 27, name: 'burlywood', color: '#deb887' },
    { id: 28, name: 'cadetblue', color: '#5f9ea0' },
    { id: 29, name: 'chartreuse', color: '#7fff00' },
    { id: 30, name: 'chocolate', color: '#d2691e' },
    { id: 31, name: 'coral', color: '#ff7f50' },
    { id: 32, name: 'cornflowerblue', color: '#6495ed' },
    { id: 33, name: 'cornsilk', color: '#fff8dc' },
    { id: 34, name: 'crimson', color: '#dc143c' },
    { id: 35, name: 'cyan', color: '#00ffff' },
    { id: 36, name: 'darkblue', color: '#00008b' },
    { id: 37, name: 'darkcyan', color: '#008b8b' },
    { id: 38, name: 'darkgoldenrod', color: '#b8860b' },
    { id: 39, name: 'darkgray', color: '#a9a9a9' },
    { id: 40, name: 'darkgreen', color: '#006400' },
    { id: 41, name: 'darkkhaki', color: '#bdb76b' },
    { id: 42, name: 'darkmagenta', color: '#8b008b' },
    { id: 43, name: 'darkolivegreen', color: '#556b2f' },
    { id: 44, name: 'darkorange', color: '#ff8c00' },
    { id: 45, name: 'darkorchid', color: '#9932cc' },
    { id: 46, name: 'darkred', color: '#8b0000' },
    { id: 47, name: 'darksalmon', color: '#e9967a' },
    { id: 48, name: 'darkseagreen', color: '#8fbc8f' },
    { id: 49, name: 'darkslateblue', color: '#483d8b' },
    { id: 50, name: 'darkslategray', color: '#2f4f4f' },
    { id: 51, name: 'darkturquoise', color: '#00ced1' },
    { id: 52, name: 'darkviolet', color: '#9400d3' },
    { id: 53, name: 'deeppink', color: '#ff1493' },
    { id: 54, name: 'deepskyblue', color: '#00bfff' },
    { id: 55, name: 'dimgray', color: '#696969' },
    { id: 56, name: 'dodgerblue', color: '#1e90ff' },
    { id: 57, name: 'firebrick', color: '#b22222' },
    { id: 58, name: 'floralwhite', color: '#fffaf0' },
    { id: 59, name: 'forestgreen', color: '#228b22' },
    { id: 60, name: 'fuchsia', color: '#ff00ff' },
    { id: 61, name: 'gainsboro', color: '#dcdcdc' },
    { id: 62, name: 'ghostwhite', color: '#f8f8ff' },
    { id: 63, name: 'gold', color: '#ffd700' },
    { id: 64, name: 'goldenrod', color: '#daa520' },
    { id: 65, name: 'gray', color: '#808080' },
    { id: 66, name: 'green', color: '#008000' },
    { id: 67, name: 'greenyellow', color: '#adff2f' },
    { id: 68, name: 'honeydew', color: '#f0fff0' },
    { id: 69, name: 'hotpink', color: '#ff69b4' },
    { id: 70, name: 'indianred', color: '#cd5c5c' },
    { id: 71, name: 'indigo', color: '#4b0082' },
    { id: 72, name: 'ivory', color: '#fffff0' },
    { id: 73, name: 'khaki', color: '#f0e68c' },
    { id: 74, name: 'lavender', color: '#e6e6fa' },
    { id: 75, name: 'lavenderblush', color: '#fff0f5' },
    { id: 76, name: 'lawngreen', color: '#7cfc00' },
    { id: 77, name: 'lemonchiffon', color: '#fffacd' },
    { id: 78, name: 'lightblue', color: '#add8e6' },
    { id: 79, name: 'lightcoral', color: '#f08080' },
    { id: 80, name: 'lightcyan', color: '#e0ffff' },
    { id: 81, name: 'lightgoldenrodyellow', color: '#fafad2' },
    { id: 82, name: 'lightgray', color: '#d3d3d3' },
    { id: 83, name: 'lightgreen', color: '#90ee90' },
    { id: 84, name: 'lightpink', color: '#ffb6c1' },
    { id: 85, name: 'lightsalmon', color: '#ffa07a' },
    { id: 86, name: 'lightseagreen', color: '#20b2aa' },
    { id: 87, name: 'lightskyblue', color: '#87cefa' },
    { id: 88, name: 'lightslategray', color: '#778899' },
    { id: 89, name: 'lightsteelblue', color: '#b0c4de' },
    { id: 90, name: 'lightyellow', color: '#ffffe0' },
    { id: 91, name: 'lime', color: '#00ff00' },
    { id: 92, name: 'limegreen', color: '#32cd32' },
    { id: 93, name: 'linen', color: '#faf0e6' },
    { id: 94, name: 'magenta', color: '#ff00ff' },
    { id: 95, name: 'maroon', color: '#800000' },
    { id: 96, name: 'mediumaquamarine', color: '#66cdaa' },
    { id: 97, name: 'mediumblue', color: '#0000cd' },
    { id: 98, name: 'mediumorchid', color: '#ba55d3' },
    { id: 99, name: 'mediumpurple', color: '#9370db' },
    { id: 100, name: 'mediumseagreen', color: '#3cb371' },
    { id: 101, name: 'mediumslateblue', color: '#7b68ee' },
    { id: 102, name: 'mediumspringgreen', color: '#00fa9a' },
    { id: 103, name: 'mediumturquoise', color: '#48d1cc' },
    { id: 104, name: 'mediumvioletred', color: '#c71585' },
    { id: 105, name: 'midnightblue', color: '#191970' },
    { id: 106, name: 'mintcream', color: '#f5fffa' },
    { id: 107, name: 'mistyrose', color: '#ffe4e1' },
    { id: 108, name: 'moccasin', color: '#ffe4b5' },
    { id: 109, name: 'navajowhite', color: '#ffdead' },
    { id: 110, name: 'navy', color: '#000080' },
    { id: 111, name: 'oldlace', color: '#fdf5e6' },
    { id: 112, name: 'olive', color: '#808000' },
    { id: 113, name: 'orange', color: '#ffa500' },
    { id: 114, name: 'orangered', color: '#ff4500' },
    { id: 115, name: 'orchid', color: '#da70d6' },
    { id: 116, name: 'palegoldenrod', color: '#eee8aa' },
    { id: 117, name: 'palegreen', color: '#98fb98' },
    { id: 118, name: 'paleturquoise', color: '#afeeee' },
    { id: 119, name: 'palevioletred', color: '#db7093' },
    { id: 120, name: 'papayawhip', color: '#ffefd5' },
  ]
  return (
    <div style={{
      backgroundColor: "aliceblue",
    }}>
      <h1>Let's Learn Colors</h1>
      {/* Map colors */}
      <div style={{
        // display in grid of five
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: "10px",
        cursor: "pointer"
      }} >
        {colors.map(color => (
          <Color key={color.id} color={color} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Colors

// Color component
const Color = ({ color }) => {
  return (
    <div style={{
      backgroundColor: color.color,
      height: "250px",
      width: "320px",
      borderRadius: "10px",
      borderStyle: "solid",
      borderWidth: "2px",
      // Content in center of div
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

    }}>
      <h2 style={{
        textTransform:"uppercase",
        fontSize:"25px",
        fontWeight:"bold",
        fontFamily:"sans-serif"
      }} >{color.name}</h2>
    </div>
  )
}