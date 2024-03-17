import React, { useState } from "react";
import "./SettingsForm.css";
import { IoEyeOffOutline, IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const SettingsForm = () => {
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);

  const toggleOldPassword = () => {
    setOldPassword(!oldPassword);
  };

  const toggleNewPassword = () => {
    setNewPassword(!newPassword);
  };
  return (
    <>
      <form className="settings-form">
        <div className="field-box">
          <IoPersonOutline />
          <input type="text" placeholder="Name" />
        </div>
        <div className="field-box">
          <CiLock />
          <input
            type={oldPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Old Password"
          />
          {oldPassword ? (
            <IoEyeOffOutline className="icon-btn" onClick={toggleOldPassword} />
          ) : (
            <IoEyeOutline className="icon-btn" onClick={toggleOldPassword} />
          )}
        </div>
        <div className="field-box">
          <CiLock />
          <input
            type={newPassword ? "text" : "password"}
            placeholder="New Password"
          />
          {newPassword ? (
            <IoEyeOffOutline className="icon-btn" onClick={toggleNewPassword} />
          ) : (
            <IoEyeOutline className="icon-btn" onClick={toggleNewPassword} />
          )}
        </div>
        <button className="update-btn">Update</button>
      </form>
    </>
  );
};

export default SettingsForm;
