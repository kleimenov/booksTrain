import React from "react";
import { Link } from "react-router-dom";

const Authentication = () => (
  <div>
    <Link to="/loginform">
      <button className="btn signIn-submit-button">Sign In</button>
    </Link>
    <Link to="/registrationform">
      <button className="btn enroll-submit-button">Enroll</button>
    </Link>
  </div>
);

export default Authentication;
