import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";

const Logout = () => {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }
  return (
    <div>
      <Link to="/">
        <button onClick={ logout } className="btn signIn-submit-button">Log Out</button>
      </Link>
    </div>
  );
};

export default Logout;
