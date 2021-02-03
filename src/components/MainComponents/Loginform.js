import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'



async function loginUser(credentials) {
  
  return fetch("http://localhost:3002/login", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(credentials),
   }).then(response => response.json())
}


const Loginform = ({ setToken }) => {
  const [userEmail, setEmail] = useState();
  const [userPass, setPassword] = useState();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const dataHolder = {
      userEmail: userEmail,
      userPass: userPass,
    };
    const data = await loginUser(dataHolder);
    //console.log(data.user);
  };
  
  return (
    <div className="container">
      <h1 className="text-secondary">Login form page</h1>
      <div className="d-flex flex-column">
        <form onSubmit={handleSubmit} >
          <label
            className="text-secondary mt-2 login-text-holder"
            htmlFor="email"
          >
            Please enter your email
          </label>
          <input
            className="form-control ml-0 my-1"
            type="email"
            name="email"
            required autoFocus
            onChange={(evt) => setEmail(evt.target.value)}
          ></input>
          <label
            className="text-secondary mt-2 login-text-holder"
            htmlFor="password"
          >
            Please enter your password
          </label>
          <input
            className="form-control ml-0 my-1"
            type="password"
            name="password"
            required autoFocus
            onChange={(evt) => setPassword(evt.target.value)}
          ></input>
          <button
            type="submit"
            className="registration-submit-button text-white my-2 pb-1"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
