import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";

const Logout = ({ setToken }) => {
 

  return (
    <div>
      <Link to="/">
        <button className="btn signIn-submit-button">Log Out</button>
      </Link>
    </div>
  );
};

export default Logout;
