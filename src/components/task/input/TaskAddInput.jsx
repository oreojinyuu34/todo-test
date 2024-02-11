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
        <input
          className="input checkbox"
          type="text"
          placeholder="予定を追加"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
