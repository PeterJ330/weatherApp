import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherApp from "./pages/WeatherApp";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={WeatherApp} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
    </div>
  </Router>
);
export default App;
