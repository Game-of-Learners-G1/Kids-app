import './styles.css';

import React, {useEffect} from 'react'
import { GoogleButton } from 'react-google-button'
import { useNavigate } from "react-router-dom";
import { UserAuth } from './Context/AuthContext';



function Login() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate()
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  //if the user is  signed in route to Abri page 
  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user])
  return (
    <div className="google-btn-container">
      <GoogleButton
          onClick= { handleGoogleSignIn }
        />
    </div>
    
  )
}

export default Login