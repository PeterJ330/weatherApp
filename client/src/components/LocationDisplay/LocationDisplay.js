import React from "react";
import "./LocationDisplay.css"

const LocationDisplay = props => (
    <div>
        <h1 className="locationDisplay">{props.city}
        {/* , {props.state} */}
        </h1>
    </div>
);

export default LocationDisplay;