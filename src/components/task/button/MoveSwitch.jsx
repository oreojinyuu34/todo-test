import React from "react";
// MoveSwitch コンポーネント
const MoveSwitch = ({ isActive, toggleIsActive }) => {
  return (
    <div className="buttons has-addons">
      <button
        className={`button is-small${isActive ? " is-small is-success" : ""}`}
        onClick={() => toggleIsActive(true)}
      >
        ON
      </button>
      <button
        className={`button is-small ${!isActive ? "is-small is-danger" : ""}`}
        onClick={() => toggleIsActive(false)}
      >
        OFF
      </button>
    </div>
  );
};

export default MoveSwitch;
