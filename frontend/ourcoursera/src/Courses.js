import "./css/courses.css";
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import CoursePage from "./CoursePage";
const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [enroll, setEnroll] = useState();
  const{id} = useParams();
  const token = localStorage.getItem('token'); 
      useEffect(() => {
        fetch(`http://localhost:3001/students/${id}/courses`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(response => response.json())
          .then(data => {
            setCourses(data);
          })
          .catch(error => console.error(error));
      }, []);



      //second useEffect hook starting
    //   useEffect(() => {
    //     const fetchInstructors = async () => {
    //     const instructorIds = courses.map(course => course.instructorId)
    //     const instructorPromises = instructorIds.map(instructorId =>

    //     fetch(`http://localhost:3001/students/${id}/instructors/${instructorId}`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`
    //       }
    //     })
    //     .then(response => response.json()
    //     )
    //     .catch(error => console.error(error))
    //     );
    //     const instructors = await Promise.all(instructorPromises);
    //     if (courses.length > 0) {
    //       fetchInstructors();
    //     }
    //   }
    // }, [courses])



    const handleEnrollCourse = async(course) => {
      const courseId = course._id;
      const studentId = id;
      try{
        const response = await fetch(`http://localhost:3001/students/${studentId}/courses/${courseId}/enroll`,{
          method: 'POST',
         headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        // console.log('Course enrolled successfully');
        window.alert('Course enrolled successfully')
      } else {
        // console.log('Error enrolling course as response not ok');
      }
    }
    catch(error){
      console.error('Error sending form data:', error);
    }
    }
    const handlePreviewCourse = async(course) => {
      const courseId = course._id;
      navigate(`/${id}/courses/${courseId}`);
    }

    const handleHomePageNav = () => {
      navigate(`/${id}`);
    }
    return (
        <div>
             <section id="nav-bar">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <div className="container mt-2 mb-2">
                <span className="navbar-brand h1 brand-name">Our Courses</span>
                {/* <form className="d-flex ms-auto p-2 align-items-center" role="search">
                  <div className="px-5">
                  <input className="form-control  custom-input" type="search" placeholder="Enter course id"/>
                  </div>
                  <div className="pl-1">
                  <button className="btn btn-success btn-search " type="submit">Search Course</button>
                  </div>
                  </form> */}
                  <button className="btn btn-success btn-danger btn-lg text-light" type="submit" onClick={handleHomePageNav}>Go to Home Page</button>

              </div>
            </nav>
    </section>
    {/* <!-- navbar ended here -->
    <!-- showcase started --> */}
    <section className="bg-dark text-light mt-3 p-5 text-center text-md-start">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1> <span className="text-warning">Learn your way through life</span></h1>
                    <p className="lead my-3 mx-2">Take control of your future by enrolling in one of our courses. We offer a wide range of courses to help you achieve your goals.
                    </p>
                    {/* <!-- <button className="btn btn-warning btn-lg">Enroll Course</button> --> */}
       </div>
          <img className="img-fluid w-50 py-4 d-none d-sm-block" src="..\images\showcase.jpg" alt="Student studying online"/>

           </div>
        </div>
    </section>
   
    {/* <!-- showcase ended here -->
<!-- Table of courses started here --> */}
     <section className="p-5">
        <table className="table table-warning table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Course Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Price</th>
                    <th scope="col">Instructor</th>
                    <th scope="col"></th>
                    <th scope="col"></th>

                  </tr>
                </thead>
                <tbody>
      {
        courses.length > 0 ? (
          courses.map((course, index) => (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>{course.duration}</td>
              <td>{course.price}</td>
              { <td>{course.instructor}</td> }
               <td><button className="btn btn-warning" onClick={()=> handleEnrollCourse(course)} >Enroll Course
               </button></td>
               <td><button className="btn btn-success" onClick={()=> handlePreviewCourse(course)} >Preview
               </button></td>
            </tr>
          ))
        ) : (
          <tr>
          <td>
          <p>Loading...</p>
          </td>
          </tr>
         
        )
      }
           </tbody>
           </table>
           </section>
    {/* <!-- showcase ended here --> */}
        </div>
    );
}
export default Courses;