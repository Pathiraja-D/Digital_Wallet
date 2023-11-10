import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminLogin.css";
import style1 from "../UserHandle/UserCrud.module.css";
import photo1 from "../../components/img/three.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { message } from "antd";

function AdminLogin() {
  const [isActive, setIsActive] = useState(false);
  const [incrementId, setIncrementId] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [telephoneNo, setTelephoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    (async () => await Load())();
  }, []);

  //data loading

  async function Load() {
    const result = await axios.get("https://localhost:7236/api/User/GetUser");
    setUsers(result.data);
  }

  // data delete

  async function deleteUser(incrementId) {
    try {
      await axios.delete(
        "https://localhost:7236/api/User/DeleteUser/" + incrementId
      );

      setIncrementId("");
      setId("");
      setName("");
      setPassword("");
      setAddress("");
      setEmail("");

      message.success("User Delete Successfully");

      Load();
    } catch (error) {
      alert(error);
    }
  }

  async function editUser(users) {
    setIncrementId(users.incrementId);
    setId(users.id);
    setName(users.name);
    setPassword(users.password);
    setAddress(users.address);
    setTelephoneNo(users.telephoneNo);
    setEmail(users.email);
    setIsActive(true);
  }

  async function update(e) {
    e.preventDefault();
    try {
      await axios.patch(
        "https://localhost:7236/api/User/UpdateUser/" +
          users.find((u) => u.incrementId === incrementId).incrementId ||
          incrementId,
        {
          incrementId: incrementId,
          id: id,
          name: name,
          password: password,
          address: address,
          telephoneNo: telephoneNo,
          email: email,
        }
      );
      message.success("Successfully Update the User details");
      setIncrementId("");
      setId("");
      setName("");
      setPassword("");
      setAddress("");
      setEmail("");
      setIsActive(false);

      Load();
    } catch (error) {
      alert(error);
    }
  }

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleBack = () => {
    setIsActive(false);
  };

  const filteredUsers = users.filter((user) => {
    return user.id.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (isActive === false) {
    return (
      <div className="hero-section1">
        <div className="All-Content">
          <h1>User Handling Menu</h1>
          <div className="SearchBar">
            <input
              type="text"
              placeholder="Search with ID"
              onChange={(e) => handleSearch(e.target.value)}
            ></input>
          </div>
          <div className="tableContainer">
            <table className="table" border="1">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Password</th>
                  <th scope="col">Address</th>
                  <th scope="col">Telephone Number</th>
                  <th scope="col">Email</th>

                  <th scope="col">Actions</th>
                </tr>
              </thead>
              {filteredUsers.map(function fn(user) {
                return (
                  <tbody>
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.password}</td>
                      <td>{user.address}</td>
                      <td>{user.telephoneNo}</td>
                      <td>{user.email}</td>

                      <td>
                        <button
                          className="Edit-Delete-Button"
                          type="button"
                          onClick={() => editUser(user)}
                        >
                          Edit
                        </button>
                        <button
                          className="Edit-Delete-Button"
                          type="button"
                          onClick={() => deleteUser(user.incrementId)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style1.UserCrud_body}>
        <div className={style1.UserCrud_menu}>
          <div className="Icon-wrapper">
            <button className="Arrowbackbutton" onClick={handleBack}>
              <ArrowBackIcon />
            </button>
          </div>
          <div className={style1.UserCrud_heading}>
            <h2>Edit Registration</h2>
          </div>
          <form className={style1.UserCrud_form}>
            <div className={style1.form_group}>
              <input
                type="text"
                placeholder="IdNumber"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className={style1.form_group}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={style1.form_group}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={style1.form_group}>
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className={style1.form_group}>
              <input
                type="text"
                placeholder="TelephoneNo"
                value={telephoneNo}
                onChange={(e) => setTelephoneNo(e.target.value)}
              />
            </div>
            <div className={style1.form_group}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="button"
              className={style1.submit_button}
              onClick={update}
            >
              Update
            </button>
          </form>
        </div>
        <div className={style1.image_crud}>
          <img src={photo1} alt="" />
        </div>
      </div>
    );
  }
}

export default AdminLogin;
