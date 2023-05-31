import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const DeleteProfile = () => {
  const { id } = useParams();
  const cleanedId = id.slice(0, -1); // Remove the last character
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
        const token = localStorage.getItem('token'); 
        console.log('id is', cleanedId);
      const response = await fetch(`http://localhost:3001/students/deleteProfile/${cleanedId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify(data),
      });

      // Handle the response from the backend
      if (response.ok) {
        // Delete Profile successful
       // const email = data.email;
        console.log('Delete Profile successful');
        navigate('/login');

      } else {
        // Delete Profile failed
        console.log('Delete Profile failed');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

    return (
        <div className="container bg-light">
        <div className="row">
    <div className="col-md-6">
        <h2 className="pt-4">Delete Profile</h2>
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
          <button type="submit" className="btn btn-warning">Delete Profile</button>
        </form>
      </div>
    </div>
    </div>
    )
}
export default DeleteProfile;