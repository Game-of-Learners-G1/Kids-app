import React from 'react';
import Footer from './Footer'

const Months = () => {
  const months = [
    {
      month: 'January',
      descript: 'It is the first month of the year .',
      days:'It has 31 days',
      id: 1
    },
    {
      month: 'February.',
      descript: 'It is the second month of the year.',
      days: 'It has 28 days and sometimes 29 days when it is a leap year.',
      id:2
    },
    {
      month: 'March',
      descript: 'It is the third month of the year',
      days:'It has 31 days',
      id:3
    },
    {
      month: 'April',
      descript: 'It is the forth month of the year',
      days:'It has 30 days',
      id:4
    },
    {
      month: 'May',
      descript: 'It is the fifth month of the year',
      days:'It has 31 days',
      id: 5
    },
    {
      month: 'June',
      descript: 'It is the sixth month of the year',
      days:'It has 30 days',
      id: 6
    },
    {
      month: 'July',
      descript: 'It is the seventh month of the year',
      days:'It has 31 days',
      id: 7
    },
    {
      month: 'August',
      descript: 'It is the eighth month of the year',
      days:'It has 31 days',
      id: 8
    },
    {
      month: 'September',
      descript: 'It is the ninth month of the year',
      days:'It has 30 days',
      id: 9
    },
    {
      month: 'October',
      descript: 'It is the tenth month of the year',
      days:'It has 31 days',
      id: 10
    },
    {
      month: 'November',
      descript: 'It is the eleventh month of the year',
      days:'It has 30 days',
      id: 11
    },
    {
      month: 'December',
      descript: 'It is the twelfth month of the year',
      days:'It has 31 days',
      id: 12
    },
  ]
  return (
    <div>
      <h1>Let's Learn Months Of The Year </h1>
      <div  style={{
        // Displaying grid of 2 columns
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        
      }}>
        {" "}
      {months.map((month) => {
        
        return  < Month key={month.id} month={month}/>
          
          
      })}
      </div>
      <Footer/>
      </div>
  )
}

export default Months;

const Month = ({ month }) => {
  return (
    <div
    style={{
      backgroundColor: "dodgerblue",
      height: "200px",
      width: "99%",
      borderRadius: "10px",
      borderStyle: "solid",
      borderWidth: "2px",
      // Content in center of div

      justifyContent: "center",
      alignItems: "center",
      paddingTop: "15%",
      fontSize: "23px"
    }}
    >
      <h1>{month.month}</h1>
      <p>{month.descript}</p>
      <p>{month.days}</p>
    </div>
  )
}