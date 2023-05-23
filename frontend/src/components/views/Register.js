import React, { useState } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";
import { useHistory } from "react-router-dom";
import config from "../../config";

const Register = () => {
  const [userNameSign, setuserNameSign] = useState("");
  const [userEmailSign, setuserEmailSign] = useState("");
  const [userPasswordSign, setuserPasswordSign] = useState("");

  const history = useHistory();

  function onAddUsers(e) {
    e.preventDefault();
    const postData = {
      name: userNameSign,
      email: userEmailSign,
      password: userPasswordSign,
    };

    localStorage.removeItem("Token");

    const url = `${config.apiUrl}${config.endpoints.users}`;
    axios
      .post(url, postData)
      .then((response) => {
        const { data } = response;
        // console.log(data);
        // console.log(data.message);

        if (response.status === 200) {
          history.push("/login");
        }
      })
      .catch((err) => {
        const { response } = err;
        // console.log(response.data);
        cogoToast.error(response.data.message);
      });
  }

  return (
    <div className="main">
      <h1 className="heading">Register</h1>
      <form onSubmit={onAddUsers}>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setuserNameSign(e.target.value);
            }}
            className="mainLoginInput nameInput"
            placeholder="&#61447; Username"
            value={userNameSign}
            name="username"
            autoComplete="off"
            required
          />{" "}
        </div>

        <div>
          <input
            type="email"
            onChange={(e) => {
              setuserEmailSign(e.target.value);
            }}
            className="mainLoginInput emailInput"
            placeholder="&#61447; Email"
            value={userEmailSign}
            name="email"
            autoComplete="off"
            required
          />{" "}
        </div>

        <div>
          <input
            type="password"
            onChange={(e) => {
              setuserPasswordSign(e.target.value);
            }}
            className="mainLoginInput passwordInput "
            placeholder="&#61475; Password"
            value={userPasswordSign}
            name="password"
            autoComplete="off"
            required
          />
        </div>

        <div>
          <button type="submit">SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
