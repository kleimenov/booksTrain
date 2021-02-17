import React from "react";
import axios from "axios";

const Registrationform = () => (
  <div className="container">
    <h1 className="text-secondary">Registration form page </h1>
    <div className="d-flex flex-column">
      <form action="">
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

export default Registrationform;
