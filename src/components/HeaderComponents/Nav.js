import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
//import DropdownButton from 'react-bootstrap/DropdownButton'

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
        <Dropdown.Item href="#/action-1">All books</Dropdown.Item>
        <Dropdown.Item href="#/action-2">My books list</Dropdown.Item>
        <Dropdown.Item href="#/action-3">About library</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Contact us</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Nav;
