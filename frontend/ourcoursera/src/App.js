import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Courses from "./Courses";
import UpdateProfile from "./UpdateProfile";
import DeleteProfile from "./DeleteProfile";
import CoursePage from "./CoursePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return(
        <Router>
        <Routes>
          <Route exact path="/:id" element={<Home/>} />
          <Route exact path="/:id/courses" element={<Courses/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/updateProfile/:id" element={<UpdateProfile/>} />
          <Route exact path="/deleteProfile/:id" element={<DeleteProfile/>} />
          <Route exact path="/:id/courses/:courseId" element={<CoursePage/>} />



        </Routes>
      </Router>
        
    )
}
export default App;