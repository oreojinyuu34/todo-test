import React from "react";

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //カードを追加する処理
    setTaskList([
      ...taskList,
      {
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label class="taskAddInput-checkbox">
          <input className="taskAddInput-checkbox-icon" type="checkbox" />
          <input
            className="input checkbox"
            type="text"
            placeholder="add a task"
            onChange={handleChange}
            value={inputText}
          />
        </label>
      </form>
    </div>
  );
};

export default TaskAddInput;
