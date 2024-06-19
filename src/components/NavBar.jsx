import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/MainPage">Main Page</NavLink>
          </li>
          <li>
            <NavLink to="/Blue-Eyes">Blue-Eyes</NavLink>
          </li>
          <li>
            <NavLink to="/Dark-Magician">Dark-Magician</NavLink>
          </li>
          <li>
            <NavLink to="/Album">Album</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
