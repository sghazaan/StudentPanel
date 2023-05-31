import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Courses from "./Courses";
import UpdateProfile from "./UpdateProfile";
import DeleteProfile from "./DeleteProfile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return(
        <Router>
        <Routes>
          <Route exact path="/:id" element={<Home/>} />
          <Route exact path="/courses" element={<Courses/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/updateProfile/:id" element={<UpdateProfile/>} />
          <Route exact path="/deleteProfile/:id" element={<DeleteProfile/>} />

        </Routes>
      </Router>
        
    )
}
export default App;