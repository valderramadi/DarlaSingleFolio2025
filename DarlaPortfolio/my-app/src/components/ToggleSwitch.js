
import React, { useState } from "react";
import "../css/toggle.css";

const ToggleSwitch = ({ onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    onToggle && onToggle(newState);
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label className="toggleswitch-label" onClick={handleToggle}>
        <span className="toggleswitch-inner" />
        <span className="switch" />
      </label>
    </div>
  );
};

export default ToggleSwitch;

