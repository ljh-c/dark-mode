import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import useDarkMode from "../hooks/useDarkMode";

const Navbar = ({ coinData }) => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="title"><h1 className="title">Crypto Tracker</h1></Link>

      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>

      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Coin</DropdownToggle>
        <DropdownMenu right>

          {coinData.map(coin => (
            <DropdownItem ><NavLink to={`/${coin.name}`}>{coin.name}</NavLink></DropdownItem>
          ))}

        </DropdownMenu>
      </Dropdown>

    </nav>
  );
};

export default Navbar;