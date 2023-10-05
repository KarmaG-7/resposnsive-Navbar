import React from "react";
import "./NavBar.css";
import { CgMenu } from "react-icons/cg";
import { CgCloseR } from "react-icons/cg";
import { useState } from "react";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={showMenu ? "navbar active" : "navbar"}>
      <div className="logo">
        <h2>Karma G7</h2>
      </div>

      <div className="menu">
        <ul>
          <li>
            <a className="links" href="#">
              About
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Services
            </a>
          </li>
        </ul>
      </div>

      <div className="mobile-navbar-btn">
        <CgMenu
          name="menu-outline"
          className="mobile-nav-icon"
          onClick={() => setShowMenu(true)}
        />
        <CgCloseR
          name="close-outline"
          className="close-outline mobile-nav-icon"
          onClick={() => setShowMenu(false)}
        />
      </div>
    </nav>
  );
}

export default NavBar;
