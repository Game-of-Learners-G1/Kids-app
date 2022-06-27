import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/FirebaseAuth'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

function SignIn() {
    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

    const signUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password, name)
          .then((userCredential) => {
            // Signed in 
              const user = userCredential.user;
              console.log(user.email);
            window.localStorage.setItem("logedInUser", JSON.stringify(user.email))
            window.location.replace("/");

          })
          .catch((error) => {
            const errorCode = error.code;
           // const errorMessage = error.message;
              alert(errorCode);
            // ..
          });
        
}


return (
    <div>

    <div className="main">
      <form className="loginForm" onSubmit={(e)=>{signUp(e)}}>
      <div>
      
        <input type={"text"} placeholder="Enter your name" onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
      <input type={"email"} placeholder="Enter email address" onChange={(event) => setEmail(event.target.value)} />
        </div>
    <div>
    <input type={"password"} placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                
    <div>
    <input type={"password"} placeholder="confirm password" onChange={(event) => setPassword(event.target.value)} />
    </div>
    <div>
            <button type='submit' className="btnCreate">Create Account</button>
        </div>
        <div>
            <p className="pCreate">Have account already?</p>
          </div>
        <div>
          <Link to="/login"> <button className="btnLogin">Login</button> </Link>
    
        </div>
        </form>
        </div>
      <Footer/>
    </div>

)
}

export default SignIn;
