import React from "react";
import "./Settings.css";
import SettingsForm from "../../components/settingsForm/SettingsForm";

const Settings = () => {
  return (
    <div className="settings-container">
      <h3>Settings Page</h3>
      <SettingsForm />
    </div>
  );
};

export default Settings;
