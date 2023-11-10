import React from "react";
import "./Navbar.css";
import logo from "../img/logo-new.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <div className="app-name">
            <p>KING KONG WALLET</p>
          </div>
        </div>
        <ul className="nav-menu">
          <li>Get App</li>
          <li>Features</li>
          <li>Learn</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="nav-login-chart">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/register">
            <Button>Register</Button>
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
