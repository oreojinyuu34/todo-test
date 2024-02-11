import React from "react";

export const Task = ({ task }) => {
  return (
    <div>
      <p>{task.text}</p>
    </div>
  );
};

export default Task;
