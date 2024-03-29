import React, { useState } from "react";

const TaskCardTitle = () => {
  const [isclicked, setIsclicked] = useState(false);
  const [inputtitle, setInputtitle] = useState("today");

  const handleClick = () => {
    setIsclicked(true);
  };

  const handleChange = (e) => {
    setInputtitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsclicked(false);
  };
  const handleBlur = () => {
    setIsclicked(false);
  };

  return (
    <div className="title has-text-weight-bold " onClick={handleClick}>
      {isclicked ? (
        <form onSubmit={handleSubmit} onBlur={handleBlur}>
          <input
            className="input "
            autoFocus
            type="text"
            onChange={handleChange}
            value={inputtitle}
            maxLength={8}
          />
        </form>
      ) : (
        <h3>{inputtitle}</h3>
      )}
    </div>
  );
};
export default TaskCardTitle;
