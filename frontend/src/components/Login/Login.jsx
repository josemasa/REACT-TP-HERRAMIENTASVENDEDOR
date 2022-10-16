import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ({ setUserState }) => {
  const navigate = useNavigate();

  const [user, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();

    /*
    axios.post("mongodb+srv://fullstack:fullstack@cluster0.hd0aepy.mongodb.net/TFI", user).then((res) => {
      alert(res.data.message);
      setUserState(res.data.user);
      navigate("/", { replace: true });
    });

*/
    if (user.username == "cristian" && user.password == "cristian") {
      navigate("/home");
    } else {
      alert("falló");
    }
  };

  return (
    <div className={loginstyle.login}>
      <form>
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={changeHandler}
          value={user.username}
        />
        <p className={basestyle.error}></p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}></p>
        <button className={basestyle.button_common} onClick={loginHandler}>
          Login
        </button>
      </form>
      <NavLink to="/signup">Not yet registered? Register Now</NavLink>
    </div>
  );
};
export default Login;
