import React, { useState } from "react";
import TaskCardTitle from "./TaskCardTitle";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskAddInput from "./input/TaskAddInput";
import Tasks from "./Tasks";
import ReactGridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const TaskCard = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
    { i: "b", x: 0, y: 1, w: 1, h: 1 },
    { i: "c", x: 0, y: 2, w: 1, h: 2, static: true },
    { i: "d", x: 0, y: 3, w: 1, h: 1 },
    { i: "e", x: 0, y: 4, w: 1, h: 1 },
  ];
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard has-background-primary ">
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={6}
        rowHeight={20}
        width={1200}
        isResizable={true}
      >
        <div key="a">
          <TaskCardTitle />
        </div>
        <div key="b">
          <TaskCardDeleteButton />
        </div>
        <div key="c">
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div key="e">
          <Tasks inputText={inputText} taskList={taskList} />
        </div>
      </ReactGridLayout>
    </div>
  );
};

export default TaskCard;
