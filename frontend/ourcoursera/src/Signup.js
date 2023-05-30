import React, { useState } from 'react';
//import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: '',
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
       sendFormData(formData);
       // handleChange(e);
        // Pass formData to backend API endpoint or function htmlFor further processing
        // You can use libraries like axios to make HTTP requests to your Express.js backend
      };


      const sendFormData = async (data) => {
        try {
          const response = await fetch('http://localhost:3001/students/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          // Handle the response from the backend
          if (response.ok) {
            // Signup successful
            console.log('Signup successful');
          } else {
            // Signup failed
            console.log('Signup failed');
          }
        } catch (error) {
          console.error('Error sending form data:', error);
        }
      };




    return (
        <div>
<div className="container bg-light justify-content-between align-items-center">
    <div className="row">
<div className="col-md-6">
    <h2 className="pt-4">Sign Up</h2>
    <form className="lead" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" placeholder="Enter first name" onChange={handleChange} value={formData.firstName} name="firstName" />
      </div>
      <div className="mb-3 ">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName" placeholder="Enter last name" onChange={handleChange} value={formData.lastName} name="lastName"/>
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Role</label>
        <select id="role" onChange={handleChange} value={formData.role} name="role" >
          <option value="choose">Choose a role</option>
          <option value="admin">Admin</option>
          <option value="instructor">Instructor</option>
          <option value="student">Student</option>
        </select>

      </div>
      <div className="mb-3">
        <label htmlFor="signupEmail" className="form-label">Email address </label>
        <input type="email" className="form-control" id="signupEmail" aria-describedby="emailHelp"
         placeholder="Enter email" value={formData.email} onChange={handleChange} name="email" />
        
      </div>
      <div className="mb-3">
        <label htmlFor="signupPassword" className="form-label">Password</label>
        <input type="password" className="form-control" id="signupPassword" placeholder="Password" 
        onChange={handleChange} value={formData.password} name="password"/>
      </div>
      {/* <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" onChange={handleChange}/>
      </div> */}
      <button type="submit" className="btn btn-warning">Sign Up</button>
    </form>
  </div>
</div>
</div>        </div>
    )
}
export default Signup;