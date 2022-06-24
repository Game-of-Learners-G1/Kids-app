import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { UserAuth } from '../Registration-Logging/Context/AuthContext';

import "../styles/Nav.css";

const Nav = () => {

  // handle sign out and route back to home page 
  const { user, logOut } = UserAuth();
  const [isUserAvailable, setUserAvailable] = useState(false)

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

const checkUser =  () => {
  useEffect(() => {
    if(user !== null) {
       return isUserAvailable = true
    }
  }, [user])
  setUserAvailable(isUserAvailable)
}  

 

  return (
    <div className="navbar">
      <h2>Course Correct</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact us</Link>
<<<<<<< Updated upstream
=======
        <Link to="/quiz">Quiz</Link>
      
        <Link to="/Login">Login</Link>
>>>>>>> Stashed changes
        <div>
          <Link to="/contact">
            Search{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
