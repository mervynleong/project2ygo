import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/main-Page">Main Page</NavLink>
          </li>
          <li>
            <NavLink to="/blue-Eyes">Blue-Eyes</NavLink>
          </li>
          <li>
            <NavLink to="/dark-Magician">Dark-Magician</NavLink>
          </li>
          <li>
            <NavLink to="/album">Album</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
