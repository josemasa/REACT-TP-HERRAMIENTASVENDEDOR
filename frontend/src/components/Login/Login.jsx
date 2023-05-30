import React, { useState, useEffect } from "react";
import basestyle from "./Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../../../img/logo.png";

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
    if (user.username == "marcelo" && user.password == "marcelo") {
      navigate("/contactos");
    } else {
      alert("falló");
    }
  };

  return (
    <>
      <div className={loginstyle.loginconteiner}>
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
        <div className={basestyle.description}>
          <h1>DESCRIPCION</h1>
          <p>
            Esta es una aplicación diseñada para facilitar la vida de un
            vendedor, cuenta con un módulo en donde podrá tener un registro de
            sus clientes , un módulo donde podrá ver sus productos con fotos y
            una descripción de los mismo, un block de notas donde podrá
            registrar sus tareas pendientes. Pronto contaremos con una versión
            móvil.
          </p>
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};
export default Login;
