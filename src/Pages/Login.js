import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from '../Firebase/FirebaseAuth';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Login() {
  
    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      console.log(user)
    window.localStorage.setItem("logedInUser", JSON.stringify(user.email))
    window.location.replace("/");

    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // alert(errorCode)
    console.log(error);
    alert(" Wrong username or password ");
    
  });
    }

  return (
    <div>
      <div className="main">
        <form className="loginForm" onSubmit = {(e) =>{signIn(e)}}>
          <div>
            <input type={"email"} placeholder="Enter email address" onChange={(event) => setEmail(event.target.value)} />
          </div>

          <div>
            <input type={"password"} placeholder="Enter password" onChange={(event) =>setPassword(event.target.value)}/>
          </div>
          <div>
            <button type = "submit" className="btnLogin">Login</button>
          </div>
          <div>
            <p className="pCreate">Don't have account?</p>
          </div>
          <div>
            <Link to="/signup"> <button className ="btnCreate">Create Account</button> </Link>
            
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
