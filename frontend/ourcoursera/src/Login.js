import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
   sendFormData(formData);
   // handleChange(e);
    // Pass formData to backend API endpoint or function htmlFor further processing
    // You can use libraries like axios to make HTTP requests to your Express.js backend
  };


  const sendFormData = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/students/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // console.log('Login successful');
        const responseData = await response.json(); // Parse the response body as JSON
        const { _id } = responseData.student;
        const token = responseData.token;
        localStorage.setItem('token', token);

        // console.log('id is', _id);
         navigate(`/${_id}`);
      } else {
        // Login failed
        // console.log('Login failed');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

    return (
        <div className="container bg-light">
        <div className="row">
    <div className="col-md-6">
        <h2 className="pt-4">Log in</h2>
        <form className="lead" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="signupEmail" aria-describedby="emailHelp" 
            placeholder="Enter email" value={formData.email} onChange={handleChange} name="email"/>
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="signupPassword" placeholder="Password"
            onChange={handleChange} value={formData.password} name="password"/>
          </div>
          <button type="submit" className="btn btn-warning">Log in</button>
        </form>
      </div>
    </div>
    </div>
    )
}
export default Login;