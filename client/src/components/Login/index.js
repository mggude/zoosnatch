import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
    return (
        <div className="loginBox">
            <h2 className="loginTitle title-font">Login</h2>
           
           
            <form className="form">
          <input
            value={props.username} onChange={props.handleInputChange}
            name="username"
            id ="username"
            type="text"
            placeholder="username"
          />
          <input
            value={props.password} onChange={props.handleInputChange}
            name="password"
            id="password"
            type="password"
            placeholder="Password"
          />
          <button id="loginBtn" onClick={props.handleLogin}>Login</button>
        </form>
        </div>
    );
}

export default Login;