import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import Nav from './Components/Nav';

const AdminTeacher = () => {
  return (
   
      <div className="App">
      {/* <Nav/> */}
          <div className="content">
          
         

            <h1> Hello World </h1>

            {/* <Route path="/login" element={<Login />} /> */}

        
          </div>
      </div>

  )
}

export default AdminTeacher;
