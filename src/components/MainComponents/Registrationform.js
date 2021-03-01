import React, { useState } from "react";

const Registrationform = ({ setToken, setUserData }) => {
  const [firstName, setFirstName] = useState();
  const [secondName, setSecondName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [userEmail, setEmail] = useState();
  const [userPassword, setPassword] = useState();

  const addNewUser = async (credentials) => {
    return fetch("http://localhost:3002/registrationform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((response) => response.json());
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const data = await addNewUser({
      firstName: firstName,
      secondName: secondName,
      phoneNumber: phoneNumber,
      userEmail: userEmail,
      userPassword: userPassword,
    });

    setUserData(data.userData);
    setToken(data.userAdded);
    
  };

  return (
    <div className="container">
      <h1 className="text-secondary">Registration form page </h1>
      <div className="d-flex flex-column">
        <form onSubmit={handleSubmit}>
          <label
            className="text-secondary mt-2 login-text-holder"
            htmlFor="first_name"
          >
            Please enter your first name
          </label>
          <input
            className="form-control ml-0 my-1"
            type="first_name"
            name="first_name"
            required
            autoFocus
            onChange={(evt) => setFirstName(evt.target.value)}
          ></input>
          <label
            className="text-secondary mt-2 login-text-holder"
            htmlFor="last_name"
          >
            Please enter your last name
          </label>
          <input
            className="form-control ml-0 my-1"
            type="last_name"
            name="last_name"
            required
            autoFocus
            onChange={(evt) => setSecondName(evt.target.value)}
          ></input>
          <label
            className="text-secondary mt-2 login-text-holder"
            htmlFor="phone_number"
          >
            Please enter your phone number
          </label>
          <input
            className="form-control ml-0 my-1"
            type="phone_name"
            name="phone_number"
            required
            autoFocus
            onChange={(evt) => setPhoneNumber(evt.target.value)}
          ></input>
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registrationform;
