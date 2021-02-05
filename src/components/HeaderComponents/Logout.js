import React from "react";
import { Link } from "react-router-dom";

const Logout = ({ setToken }) => {
  console.log(setToken);

  return (
    <div>
      <Link to="/">
        <button className="btn signIn-submit-button">Log Out</button>
      </Link>
    </div>
  );
};

export default Logout;
