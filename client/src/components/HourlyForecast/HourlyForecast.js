import React from "react";
import "./HourlyForecast.css";
import moment from "moment";
import momentTimeZone from "moment-timezone";

const HourlyForecast = props => {
  return (
    <div className="hourlyForecast">
      <h3> {moment(props.hourlyTime * 1000).tz(props.timeZone).format("h:mm A")} </h3>
      <h4> Temp: {Math.round(props.hourlyTemp)}°</h4>
      <h4>Precip: {Math.round(props.hourlyPrecip * 100)}%</h4>
    </div>
  );
}
export default HourlyForecast