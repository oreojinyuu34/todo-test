import React, { useState } from "react";
import TaskCardTitle from "./TaskCardTitle";
// import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskAddInput from "./input/TaskAddInput";
import Tasks from "./Tasks";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard has-background-link-light">
      <div className="mb-2">
        <div className="title taskCard-title">
          <TaskCardTitle />
        </div>
        {/* <TaskCardDeleteButton /> */}
        <TaskAddInput
          inputText={inputText}
          setInputText={setInputText}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </div>

      <div>
        <Tasks inputText={inputText} taskList={taskList} />
      </div>
    </div>
  );
};

export default TaskCard;
