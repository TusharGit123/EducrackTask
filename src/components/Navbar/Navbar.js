import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <h5> Dashboard</h5>
          <Link to="/addprofile">
            <button className="add-profile-button">Add Profile</button>
          </Link>
        </nav>
      </div>
    </>
  );
};
