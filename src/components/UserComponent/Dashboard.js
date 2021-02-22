import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import ProfileCard from "./ProfileCard";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <Navbar />
        <div className="main_profile">
          <div className="profile-data">
            <ProfileCard />
          </div>

          <Link to="/logout">
            <button type="button" className="logout-button">
              LogOut
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default Dashboard;
