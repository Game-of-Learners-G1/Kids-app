import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
  } from "firebase/auth";
import { auth } from '../Firebase'
import React, {useState, useEffect, useContext, createContext } from 'react'


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    // sign in with pop up
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
    // log out
    const logOut = () => {
        signOut(auth)
      }
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          console.log('User', currentUser)
        });
        return () => {
          unsubscribe();
        };
      }, []);
    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )

    
}

export const UserAuth = () => {
    return useContext(AuthContext)
  }