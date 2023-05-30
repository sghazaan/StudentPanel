import "./css/courses.css";
const Courses = () => {
    return (
        <div>
             <section id="nav-bar">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <div className="container mt-2">
                <span className="navbar-brand h1 brand-name">Our Courses</span>
                <form className="d-flex ms-auto" role="search">
                    <input className="form-control me-3 custom-input" type="search" placeholder="Enter course id"/>
                    <button className="btn btn-success btn-search" type="submit">Search Course</button>
                  </form>
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
                    <p className="lead my-3 mx-2">Take control of your future by enrolling in one of our courses. We offer a wide range of courses to help you achieve your goals.
                    </p>
                    {/* <!-- <button className="btn btn-warning btn-lg">Enroll Course</button> --> */}
                </div>
                <img className="img-fluid w-50 py-4 d-none d-sm-block" src="images/showcase.jpg" alt="Student studying online"/>
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
                    <th scope="col">Course Id</th>
                    <th scope="col">Course Title</th>
                    <th scope="col">Instructor</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>CS3002</td>
                    <td>Programming Fundamentals</td>
                    <td>Mr. Ejaz Ahmed</td>
                    <td><button className="btn btn-warning ">Enroll Course</button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>CS4001</td>
                    <td>Data Structures</td>
                    <td>Dr. Sarah Khan</td>
                    <td><button className="btn btn-warning ">Enroll Course</button></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>CS2003</td>
                    <td>Database Management Systems</td>
                    <td>Prof. John Smith</td>
                    <td><button className="btn btn-warning ">Enroll Course</button></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>CS1005</td>
                    <td>Web Development</td>
                    <td>Ms. Emily Johnson</td>
                    <td><button className="btn btn-warning ">Enroll Course</button></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>CS5004</td>
                    <td>Artificial Intelligence</td>
                    <td>Dr. Michael Brown</td>
                    <td><button className="btn btn-warning ">Enroll Course</button></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>CS2006</td>
                    <td>Operating Systems</td>
                    <td>Prof. Lisa Anderson</td>
                    <td><button className="btn btn-warning ">Enroll Course</button></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>CS3007</td>
                    <td>Software Engineering</td>
                    <td>Mr. David Thompson</td>
                    <td><button className="btn btn-warning ">Enroll Course</button></td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>CS4002</td>
                    <td>Computer Networks</td>
                    <td>Dr. Olivia Wilson</td>
                    <td><button className="btn btn-warning ">Enroll Course</button></td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>CS1003</td>
                    <td>Mobile App Development</td>
                    <td>Ms. Sophia Clark</td>
                    <td><button className="btn btn-warning ">Enroll Course</button></td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>CS2008</td>
                    <td>Algorithms</td>
                    <td>Prof. Benjamin Davis</td>
                    <td><button className="btn btn-warning ">Enroll Course</button></td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>CS3004</td>
                    <td>Computer Graphics</td>
                    <td>Dr. Robert Johnson</td>
                    <td><button className="btn btn-warning ">Enroll Course</button></td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>CS4005</td>
                    <td>Software Testing</td>
                    <td>Mr. Daniel Thompson</td>
                    <td><button className="btn btn-warning ">Enroll Course</button></td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>CS2007</td>
                    <td>Machine Learning</td>
                    <td>Prof. Amanda Davis</td>
                    <td><button className="btn btn-warning ">Enroll Course</button></td>
                  </tr>
                </tbody>
          </table>
    </section>
    {/* <!-- showcase ended here --> */}
        </div>
    );
}
export default Courses;