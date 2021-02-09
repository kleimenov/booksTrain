import React from "react";
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
        <Dropdown.Item href="/allbooks">All books</Dropdown.Item>
        <Dropdown.Item href="/myBooks">My books list</Dropdown.Item>
        <Dropdown.Item href="/about">About library</Dropdown.Item>
        <Dropdown.Item href="/contact">Contact us</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Nav;
