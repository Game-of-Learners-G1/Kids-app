import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "../styles/Nav.css";

const Nav = () => {
  const [logedinUser, setLogedinUser] = useState(null);
  useEffect(() => {
    const userInLocalstorage = JSON.parse( window.localStorage.getItem("logedInUser"))
    setLogedinUser(userInLocalstorage)
  }, []);

  const signOutHandler = () => {
    setLogedinUser(null)
    window.localStorage.clear()
  }

  return (
    <div className="navbar">
    

        <h2>Course Correct</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/quiz">Quiz</Link>


        {logedinUser ? <button onClick={() => { signOutHandler() }}
          style = {{
            height: "40px",
            width: "80px",
            backgroundColor: "lightblue",
            border: "none",
            borderRadius: "20px",
            fontSize: "17px",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >logOut</button> : <div>
        <Link to="/login">
          <button className="btnBarLogin">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btnBarSignup">Sign up</button>
        </Link>
        </div> }
      </div>
      
    </div>
  );
};

export default Nav;
