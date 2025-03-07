import React, { useState } from "react";

const Settings = ({ user, setUser }) => {
  const [localSettings, setLocalSettings] = useState(user.settings);
  const toggleDarkMode = () => {
    const updatedSettings = {
      localSettings,
      darkMode: !localSettings.darkMode,
    };
    setLocalSettings(updatedSettings);
    setUser({ user, settings: updatedSettings });
  };
  return (
    <div className="container text-center mt-5">
      <h2>⚙️ Settings</h2>
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkModeSwitch"
          checked={localSettings.darkMode}
          onChange={toggleDarkMode}
        />
        <span className="ms-2 user-select-none">
          {localSettings.darkMode
            ? "🌙 Dark Mode Enabled"
            : "☀️ Light Mode Enabled"}
        </span>
      </div>
    </div>
  );
};

export default Settings;
