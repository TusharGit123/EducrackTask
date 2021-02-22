import React from "react";
import "./App.css";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logout from "./components/Logout";
import Dashboard from "./components/UserComponent/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
