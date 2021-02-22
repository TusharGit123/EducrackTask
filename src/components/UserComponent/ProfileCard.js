import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div className="col-md-3 col-sm-3 col-lg-3 mb-4">
      <div className="card">
        <div className="icon-div">
          <Link to="/" className="edit-icon">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </Link>

          <span className="delete-icon">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </span>
        </div>
        <img
          src={"https://source.unsplash.com/collection/ZMraoOybTLQ/1600x900"}
          alt="profile-pic"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Profile Name</h5>
          <p className="card-text">Profile Data</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
