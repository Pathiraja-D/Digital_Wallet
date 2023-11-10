import React from "react";
import "./NavbarlogOut.css";
import logo from "../../components/img/logo-new.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar1">
        <div className="nav-logo1">
          <img src={logo} alt="" />
          <div className="app-name1">
            <p>KING KONG WALLET</p>
          </div>
        </div>
        <ul className="nav-menu1">
          <li>Get App</li>
          <li>Features</li>
          <li>Learn</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="nav-login-chart1">
          <Link to="/">
            <button>Log Out</button>
          </Link>
        </div>
      </div>
      <div className="footer">
        <div class="row">
          &copy; 2023 King Kong Wallet &#124; All rights reserverd
        </div>
      </div>
    </div>
  );
};

export default Navbar;
