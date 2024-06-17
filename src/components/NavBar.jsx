import React from "react";
import styles from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/Blue-Eyes"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Blue-Eyes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Dark-Magician"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Dark Magician
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
