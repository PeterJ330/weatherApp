import React from "react";
import "./SignUpForm.css";
import Jumbotron from "../Jumbotron";

const SignUpForm = props => {
  return (
    <Jumbotron>
      <h2>Create your Account</h2>
      <h3>to continue to WeatherWatch</h3>
      <input
        id="username"
        type="text"
        onChange={props.handleInputChange}
        value={props.value}
        name="username"
        placeholder="Choose A Username"
      />
      <br />
      <input
        id="password"
        type="text"
        onChange={props.handleInputChange}
        value={props.value}
        name="password"
        placeholder="New Password"
      />
      <br />
      <input
        id="password"
        type="text"
        onChange={props.handleInputChange}
        value={props.value}
        name="confirmPassword"
        placeholder="Confirm Password"
      />
      <br />
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary"
      > Sign Up </button>

      <p>
        <a href="/Login"> Sign in instead </a>
      </p>
    </Jumbotron>
  );
}

export default SignUpForm;