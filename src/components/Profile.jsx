import React from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

const Profile = ({ user, setUser }) => {
  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="profile-card">
        <ProfilePicture />
        <UserInfo name={user.name} />
        <div className="mt-3">
          <label className="form-label">Your Name:</label>
          <input
            type="text"
            className="form-control"
            value={user.name}
            onChange={handleNameChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
