import React from "react";

const AddTaskCardButton = ({ onAddTaskCard }) => {
  return (
    <div className="addTaskCardButton__Area">
      <button className="button addTaskCardButton__btn" onClick={onAddTaskCard}>
        カード追加
      </button>
    </div>
  );
};

export default AddTaskCardButton;
