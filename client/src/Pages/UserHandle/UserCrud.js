import React, { useState } from "react";
import axios from "axios";
import CrudMenu from "./UserCrud.module.css";
import photo1 from "../../components/img/three.jpg";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

function UserCrud() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [telephoneNo, setTelephoneNo] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:7236/api/User/AddUser", {
        id: id,
        name: name,
        password: password,
        address: address,
        telephoneNo: telephoneNo,
        email: email,
      });

      setId("");
      setName("");
      setPassword("");
      setAddress("");
      setTelephoneNo("");
      setEmail("");

      message.success("Registration successful");
      navigate("/login");
    } catch (error) {
      message.error("Please check your gived details");
    }
  };

  return (
    <div className={CrudMenu.UserCrud_body}>
      <div className={CrudMenu.UserCrud_menu}>
        <div className={CrudMenu.UserCrud_heading}>
          <h2>User Registration</h2>
        </div>
        <form className={CrudMenu.UserCrud_form}>
          <div className={CrudMenu.form_group}>
            <input
              type="text"
              placeholder="Enter Your ID Number"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className={CrudMenu.form_group}>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={CrudMenu.form_group}>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={CrudMenu.form_group}>
            <input
              type="text"
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={CrudMenu.form_group}>
            <input
              type="text"
              placeholder="Enter Your Telephone Number"
              value={telephoneNo}
              onChange={(e) => setTelephoneNo(e.target.value)}
            />
          </div>
          <div className={CrudMenu.form_group}>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="button"
            className={CrudMenu.submit_button}
            onClick={handleSave}
          >
            Submit
          </button>
        </form>
      </div>
      <div className={CrudMenu.image_crud}>
        <img src={photo1} alt="" />
      </div>
    </div>
  );
}

export default UserCrud;
