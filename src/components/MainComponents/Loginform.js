import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect, useHistory } from "react-router-dom";

async function loginUser(credentials) {
  return fetch("http://localhost:3002/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((response) => response.json());
}


const Loginform = ({ setToken, setUserData, history }) => {
  const [userEmail, setEmail] = useState();
  const [userPass, setPassword] = useState();
  
  const handleSubmit = async (evt) => {
    evt.preventDefault();
   
    const data = await loginUser({
      userEmail: userEmail,
      userPass: userPass,
    });
    //console.log(data)
    setUserData(data.userData)
    setToken(data.user);

  };

  
  return (
    <div className="container">
      <h1 className="text-secondary">Login form page</h1>
      <div className="d-flex flex-column">
        <form onSubmit={handleSubmit}>
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
            required
            autoFocus
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
            required
            autoFocus
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
