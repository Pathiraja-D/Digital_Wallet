import { React, useState } from "react";
import LoginPageM from "./LoginPage.module.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { message } from "antd";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(0);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7236/api/Login/login",
        {
          email: email,
          password: password,
        }
      );
      const rolegot = response.data;
      setRole(rolegot);
      message.success("Successfully Logged In");
    } catch (error) {
      alert(error);
    }
  };

  if (role === 1) {
    return <Navigate replace to="/main" />;
  } else if (role === 2) {
    return <Navigate replace to="/admin/user/manage" />;
  } else if (role === 3) {
    alert("Invalid Credentials or User doesn't exist");
    setEmail("");
    setPassword("");
    setRole(0);
  } else {
    return (
      <div className={LoginPageM.LoginPage_body}>
        <div className={LoginPageM.LoginPage_menu}>
          <div className={LoginPageM.LoginPage_Heading}>
            <h1>WELLCOME</h1>
            <h4>
              Unlock limitless possibilities with a secure login to your digital
              wallet
            </h4>
          </div>
          <div className={LoginPageM.form_group}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={LoginPageM.form_group}>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className={LoginPageM.submit_button} onClick={handleLogin}>
            Log In
          </button>

          <div className={LoginPageM.SignUp_infor}>
            <label>If you don't have an account?</label>
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
        <div className={LoginPageM.para}>
          <p>
            Welcome to KINGKONG Digital Wallet. Log In to access to your
            account.
          </p>
        </div>
      </div>
    );
  }
};
export default LoginPage;
