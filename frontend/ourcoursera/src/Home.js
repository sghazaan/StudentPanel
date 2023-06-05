import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Home = () => {
    const { id } = useParams();
    const  navigate = useNavigate();
    const handleUpdateProfile = () => {
         console.log('id in Home.js UPDATE is', id);
        navigate(`/updateProfile/${id}`);

    }
    const handleDeleteProfile = () => {
        console.log('id in Home.js DEL is', id);
        navigate(`/deleteProfile/${id}}`);
    }
    const handleViewCourses = () => {
        navigate(`/${id}/courses`);
    }
    return(
        <div>
             <section id="nav-bar">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#"><img src="../images/ourcourseraLogo.png" width="90px" height="90px"/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav flex-colum">
                    <li className="nav-item m-2">
                        <a href="#allCourses" className="nav-link">All Courses</a>
                    </li>
                    <li className="nav-item m-2">
                        <a href="#allInstructors" className="nav-link">All Instructors</a>
                    </li>
                    <li className="nav-item m-2">
                        <a href="#progress" className="nav-link">My Progress</a>
                    </li>  
                    </ul>

                    <div className="container d-flex justify-content-end" >
                    <ul className="navbar-nav">
                    <li className="nav-item">
                    <button className="btn btn-danger m-2" onClick={handleUpdateProfile}>Update Profile</button>
                    </li>
                    <li className="nav-item">
                    <button className="btn btn-danger m-2" onClick={handleDeleteProfile}>Delete Profile</button>
                    </li>
                    </ul>
                    </div>    
              </div>
            </div>
            </nav>
    </section>
    {/* <!-- navbar ended here -->
    <!-- showcase started --> */}
    <section className="bg-dark text-light pt-5 mt-5 text-center text-md-start">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1> <span className="text-warning">Learn your way through life</span></h1>
                    <p className="lead my-3 mx-2">We focus on quality learning of students. We equip them with best industrial skills
                        so that they can be ready for the future.
                    </p>
                    <button className="btn btn-warning btn-lg my-4"
                     onClick={handleViewCourses}>View Courses</button>
                </div>
                <img className="img-fluid w-50 py-4 d-none d-sm-block" src="../images/showcase.jpg" alt="Student studying online"/>
            </div>
        </div>
    </section>
    {/* <!-- showcase ended here -->
    <!-- newsletter started --> */}
    <section className="bg-warning text-tertiary p-5">
        <div className="conatiner">
            <div className="d-md-flex justify-content-between align-items-center">
                <h3 className="mb-3 mb-md-0">Sign up for our newsletter:</h3>
                <div className="input-group news-input">
                    <input type="text" className="form-control" placeholder="Your email address..."/>
                    <button className="btn btn-dark btn-lg" type="button">Submit</button>
                  </div>

            </div>
        </div>
    </section>
    {/* <!-- newsletter ended -->
    <!-- boxes started --> */}
    <section className="p-5 bg-warning-subtle">
        <div className="container">
            <div className="row text-center g-4">
                <div className="col-md">
                    <div className="card bg-warning text-light">
                        <div className="card bg-info text-center text-light">
                            <div className="h1 mb-3">
                                <i className="bi bi-laptop"></i>
                            </div>
                            <h3 className="card-title mb-3">Our Courses</h3>
                            <p className="card-text mb-2">
                               We provide many courses in modern sciences and humanities. You can choose
                                 any course of your choice and start learning.
                               </p>
                               <a href="#" className="btn btn-light">Read More</a>
                        </div>                 
                    </div>   
                </div>
                <div className="col-md">
                    <div className="card bg-success text-light">
                        <div className="card bg-success text-center text-light">
                            <div className="h1 mb-3">
                                <i className="bi bi-person"></i>
                            </div>
                            <h3 className="card-title mb-3">Our Instructors</h3>
                            <p className="card-text mb-2">
                              We have the best faculty in the state. They are highly qualified
                              professionals and have years of experience in their respective fields.
                               </p>
                               <a href="#" className="btn btn-light">Read More</a>
                        </div>                 
                    </div> 
                </div>
                <div className="col-md">
                    <div className="card bg-dark text-light">
                        <div className="card bg-danger text-center text-light">
                            <div className="h1 mb-3">
                                <i className="bi bi-file-bar-graph-fill"></i>
                            </div>
                            <h3 className="card-title mb-3">Progress Tracking</h3>
                            <p className="card-text mb-2">
                               We track your progress and give you the best learning experience. 
                               Grades of all of your assignments, quizzes and exams are recorded
                               and you can see them anytime.


                               </p>
                               <a href="#" className="btn btn-light">Read More</a>
                        </div>                 
                    </div> 
                </div>

            </div>
        </div>
    </section>
    {/* <!-- boxes ended here -->
    <!-- learn section 1 started --> */}
    <section id="allCourses" className="p-5 bg-warning-subtle">
        <div className="container">
            <div className= "row align-items-center justify-content-between">
                <div className="col-md">
                    <img src="../images/learn.jpg" className="img-fluid" alt="Learn"/>
                </div>
                <div className="col-md p-5">
                    <h1>Learn the Fundamentals of any skill</h1>
                    <p className="lead">
                    Welcome to our comprehensive education platform, where knowledge meets opportunity!
                    Our platform offers a wide range of courses designed to empower learners like you
                     with valuable skills and expertise. Whether you're a student, professional, or 
                     lifelong learner, we have something for everyone. </p>
                    <p className="lead">
                    As you progress through your chosen courses, you'll have opportunities to connect
                     with a vibrant community of learners. Engage in discussions, share insights, and
                      collaborate with fellow students, fostering a supportive and enriching learning 
                      environment.
                    </p>
                    <a href="#" className="btn btn-light mt-3"><i className="bi bi-chevron-right"></i> Read more</a>
                </div>
            </div>

        </div>

    </section>
        {/* <!-- learn section 1 ended -->
        <!-- learn section 2 started here --> */}
        <section id="allCourses" className="p-5 bg-dark text-light">
            <div className="container">
                <div className= "row align-items-center justify-content-between">
                    <div className="col-md p-5">
                        <h1>Focus on Practical Skills</h1>
                        <p className="lead">
                        Embark on your educational journey with us and unlock your full potential.
                         Explore our diverse course offerings, embark on new learning adventures, and
                          gain the knowledge you need to thrive in today's ever-evolving world.
                        Join our educational community and embrace the joy of lifelong learning. 
                        Start your learning journey with us today!                        </p>
                        <p className="lead">
                        Upon successful completion of each course, you'll receive a certificate, 
                        showcasing your accomplishment and validating your newly acquired skills.
                         These certificates can bolster your resume, enhance your professional profile,
                          and open doors to exciting career opportunities.
                        </p>
                        <a href="#" className="btn btn-light mt-3"><i className="bi bi-chevron-right"></i> Read more</a>
                    </div>
                    <div className="col-md">
                        <img src="../images/learn.jpg" className="img-fluid" alt="Learn2"/>
                    </div>
                </div>
    
            </div>
    
        </section>
        {/* <!-- Learn section 2 ended here --> */}
        </div>

    )
}
export default Home;