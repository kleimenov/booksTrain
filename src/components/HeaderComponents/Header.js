import React from "react";
import Nav from "./Nav";
import Authentication from "./Authentification";
import Logout from "./Logout";
import { Link } from "react-router-dom";

const Header = ({ token, setToken }) => {
  if (!token) {
    return (
      <div className="NavWrapper">
        <Link to="/">
          <h1 className="custom-logo-font">booksTrain</h1>
        </Link>
        <Authentication />
      </div>
    );
  }
  return (
    <div className="NavWrapper">
      <Link to="/">
        <h1 className="custom-logo-font">booksTrain</h1>
      </Link>
      <Nav />
      <Logout />
    </div>
  );
};

export default Header;
