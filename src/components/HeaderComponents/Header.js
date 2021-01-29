import React from "react";
import Nav from "./Nav";
import Authentication from "./Authentification";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="NavWrapper">
    <Link to="/">
      <h1 className="custom-logo-font">booksTrain</h1>
    </Link>
    <Nav />
    <Authentication />
  </div>
);

export default Header;
