import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";

const Logout = ( props, setToken ) => {
  //console.log('from logout');
  //console.log(props.token)
  //console.log(props.setToken)
  const logoutHandler = () => {
  //   // localStorage.clear();
  //   // document.location.href = "/";
    return setToken(null)
  };
  return (
    <div>
      <Link to="/">
        <button onClick={logoutHandler} className="btn signIn-submit-button">
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default Logout;
