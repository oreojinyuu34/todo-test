import React from "react";

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText) {
      return;
    }
    //カードを追加する処理
    setTaskList([
      ...taskList,
      {
        id: Date.now(),
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
          placeholder="予定を追加※8文字以内"
          onChange={handleChange}
          value={inputText}
          maxLength={8}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
