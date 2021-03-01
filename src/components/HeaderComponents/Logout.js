import React from "react";
import { Link } from "react-router-dom";

const Logout = ({ token, setToken }) => {
  const logoutHandler = () => {
    localStorage.clear();
    document.location.href = "/";
  };

  return (
    <div>
      <Link to="/">
        <button
          onClick={logoutHandler}
          className="btn signIn-submit-button"
        >
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default Logout;
