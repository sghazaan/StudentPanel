const Home = () => {
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
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item px-1">
                        <a href="#allCourses" className="nav-link">All Courses</a>
                    </li>
                    <li className="nav-item px-1">
                        <a href="#allInstructors" className="nav-link">All Instructors</a>
                    </li>
                    <li className="nav-item px-1">
                        <a href="#progress" className="nav-link">My Progress</a>
                    </li>  
                    {/* <!-- <li className="nav-item px-4">
                        <a href="#" className="nav-link "><i className="bi bi-person-circle fs-1"></i></a>
                    </li>   --> */}
                    
                    
                </ul>
                {/* <!-- <form className="d-flex px-4" role="search">
                    <input className="form-control me-2" type="search" placeholder="Enter course id">
                    <button className="btn btn-success" type="submit">Search</button>
                  </form> --> */}
              </div>
            </div>
            </nav>
    </section>
    {/* <!-- navbar ended here -->
    <!-- showcase started --> */}
    <section className="bg-dark text-light p-5 text-center text-md-start">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1> <span className="text-warning">Learn your way through life</span></h1>
                    <p className="lead my-3 mx-2">We focus on quality learning of students. We equip them with best industrial skills
                        so that they can be ready for the future.
                    </p>
                    <button className="btn btn-warning btn-lg">Enroll Course</button>
                </div>
                <img className="img-fluid w-50 py-4 d-none d-sm-block" src="images/showcase.jpg" alt="Student studying online"/>
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
                    <img src="images/learn.jpg" className="img-fluid" alt="Learn"/>
                </div>
                <div className="col-md p-5">
                    <h1>Learn the Fundamentals of any skill</h1>
                    <p className="lead">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium architecto debitis magnam dolores ratione nobis!
                    </p>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi dolor, doloribus distinctio numquam officia provident ab recusandae. Aspernatur laboriosam nobis asperiores sunt dolor, quis dolorem cum? Deserunt, fugit vel!</p>
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
                        <h1>Learn the Fundamentals of any skill</h1>
                        <p className="lead">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium architecto debitis magnam dolores ratione nobis!
                        </p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi dolor, doloribus distinctio numquam officia provident ab recusandae. Aspernatur laboriosam nobis asperiores sunt dolor, quis dolorem cum? Deserunt, fugit vel!</p>
                        <a href="#" className="btn btn-light mt-3"><i className="bi bi-chevron-right"></i> Read more</a>
                    </div>
                    <div className="col-md">
                        <img src="images/learn.jpg" className="img-fluid" alt="Learn"/>
                    </div>
                </div>
    
            </div>
    
        </section>
        {/* <!-- Learn section 2 ended here --> */}
        </div>

    )
}
export default Home;