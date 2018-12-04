import React from "react";
import "./LoginForm.css"
import Jumbotron from "../Jumbotron";

const LoginForm = props => {
  return (
    <Jumbotron>
      <h2>Sign in</h2>
      <h3>to continue to WeatherWatch</h3>
      <input
        id="username"
        type="text"
        onChange={props.handleInputChange}
        value={props.value}
        name="username"
        placeholder="Username"
      />
      <br />
      <input
        id="password"
        type="text"
        onChange={props.handleInputChange}
        value={props.value}
        name="password"
        placeholder="Password"
      />
      <br />
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary"
      > Login </button>

      <p>
        <a href="/signup"> Create account </a>
      </p>

    </Jumbotron>
  );
}

export default LoginForm;