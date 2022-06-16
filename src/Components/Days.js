import React from "react";

const Days = () => {
  // Days of the week
  const days = [
    { id: 1, name: "Sunday", description: "first day of the week" },
    { id: 2, name: "Monday", description: "second day of the week" },
    { id: 3, name: "Tuesday", description: "third day of the week" },
    { id: 4, name: "Wednesday", description: "fourth day of the week" },
    { id: 5, name: "Thursday", description: "fifth day of the week" },
    { id: 6, name: "Friday", description: "sixth day of the week" },
    { id: 7, name: "Saturday", description: "seventh day of the week" },
  ];
  return (
    <div>
      <h1>Days</h1>
      {/* Mapping through the days array */}
      <div style={{
        // Displaying grid of 2 columns
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
        
      }} >
        {" "}
        {days.map((day) => {
          return <Day day={day} key={day.id} />;
        })}
      </div>
    </div>
  );
};

export default Days;

// Days of the week
const Day = ({ day }) => {
  return (
    <div style={{
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
      
    }}>
      <h1>{day.name}</h1>
      <p>{day.description}</p>
    </div>
  );
};
