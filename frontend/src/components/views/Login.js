import React, { useState } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";
import config from "../../config";

import { useHistory } from "react-router-dom";

const Login = () => {
  const [userEmailLog, setuserEmailLog] = useState("");
  const [userPasswordLog, setuserPasswordLog] = useState("");

  const history = useHistory();

  function onLogUsers(e) {
    e.preventDefault();
    const logData = {
      email: userEmailLog,
      password: userPasswordLog,
    };

    const url = `${config.apiUrl}${config.endpoints.login}`;

    axios
      .post(url, logData)
      .then((response) => {
        const { data } = response;
        // console.log(data);

        if (response.status === 200) {
          cogoToast.success("Logged in successfully");
          localStorage.setItem("Token", data.data.token);
          console.log(localStorage.getItem("Token"));
          history.push("/");
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
      <h1 className="heading">Log In</h1>
      <form onSubmit={onLogUsers}>
        <div>
          <input
            type="text"
            className="mainLoginInput"
            placeholder="&#61447; Email"
            onChange={(e) => setuserEmailLog(e.target.value)}
            value={userEmailLog}
            name="email"
            required
          />{" "}
        </div>

        <div>
          <input
            type="password"
            className="mainLoginInput passwordInput "
            placeholder="&#61475; Password"
            value={userPasswordLog}
            onChange={(e) => setuserPasswordLog(e.target.value)}
            name="password"
            required
          />
        </div>

        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
