import React from "react";

export const Task = ({ task }) => {
  return (
    <div className="box p-1 mb-2 taskBox">
      <p className="taskText">{task.text}</p>
    </div>
  );
};

export default Task;
