import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/Login.css';
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Remove validation and authentication logic
    console.log("User Submitted:", credentials);
  };

  // const handleGoogleSuccess = (response) => {
  //   const userObject = jwtDecode(response.credential); 
  //   console.log(userObject);
  // };

  return (
    <div>
      <nav className="navbar">
        <h1 className="logo"><RouterLink to="/" id="logo-link">XENO CRM</RouterLink></h1>
      </nav>
      <div className="login-container flex flex-col">
        <h1 className='text-2xl font-bold mb-4'>Login to your account</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            className="login-input" 
            placeholder="Email Address" 
            name="email" 
            value={credentials.email} 
            onChange={handleInputChange} 
          />
          <input 
            type="password" 
            className="login-input" 
            placeholder="Password" 
            name="password" 
            value={credentials.password} 
            onChange={handleInputChange} 
          />
          <button type="submit" className="login-button">Login</button>
          <p className="create-account-text">
            Don't have an account? <RouterLink to="/register">Create One</RouterLink>
          </p>
          {/* <GoogleLogin onSuccess={handleGoogleSuccess} /> */}
        </form>
      </div>
    </div>
  );
}

export default Login;