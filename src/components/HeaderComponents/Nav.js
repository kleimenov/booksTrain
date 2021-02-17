import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Nav = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className="custom-button"
        variant="white"
        id="dropdown-basic"
      >
        Library
      </Dropdown.Toggle>
      <Dropdown.Menu className="custom-dropdown-menu">
        <Dropdown.Item as={Link} to="/mybooks">
          My books list
        </Dropdown.Item>
        <Dropdown.Item href="/about">My books wish list</Dropdown.Item>
        <Dropdown.Item href="/about">About library</Dropdown.Item>
        <Dropdown.Item href="/contact">Contact us</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Nav;
