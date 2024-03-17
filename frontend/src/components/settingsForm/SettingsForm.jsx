import React, { useState } from "react";
import "./SettingsForm.css";
import { IoEyeOffOutline, IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const SettingsForm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Old Password"
          />
          {showPassword ? (
            <IoEyeOffOutline
              className="icon-btn"
              onClick={handleTogglePasswordVisibility}
            />
          ) : (
            <IoEyeOutline
              className="icon-btn"
              onClick={handleTogglePasswordVisibility}
            />
          )}
        </div>
        <div className="field-box">
          <CiLock />
          <input type="password" placeholder="New Password" />
          {showPassword ? (
            <IoEyeOffOutline
              className="icon-btn"
              onClick={handleTogglePasswordVisibility}
            />
          ) : (
            <IoEyeOutline
              className="icon-btn"
              onClick={handleTogglePasswordVisibility}
            />
          )}
        </div>
        <button className="update-btn">Update</button>
      </form>
    </>
  );
};

export default SettingsForm;
