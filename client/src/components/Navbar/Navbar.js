import React from "react";
import "./Navbar.css";
// import { DropDownMenu } from "material-ui";

const Navbar = props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right">
          <li>
            <a href="/Login"> <i className="material-icons">person_add</i></a>
          </li>
        </ul>
        
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              onChange={props.handleInputChange}
              value={props.value}
              name="address"
            />
            <label
              onChange={props.handleInputChange}
              value={props.value}
              name="address"
              className="label-icon"
              placeholder="City Search"
            // htmlFor="search"
            >
              <button
                onClick={props.handleFormSubmit}
                // className="btn btn-primary"
                className="material-icons"
              > add_location </button>
            </label>

          </div>

        </form>
        {/* <div id="title">WeatherWatch</div> */}

      </div>

    </nav>
  );
};

export default Navbar;