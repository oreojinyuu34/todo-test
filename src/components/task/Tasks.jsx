import React from "react";
import ReactGridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

export const Tasks = ({ taskList }) => {
  // タスクごとに一意のレイアウトを生成
  const generateLayout = () => {
    return taskList.map((task, index) => ({
      i: task.id ? task.id.toString() : `undefined-id-${index}`, // 一時的なIDを割り当て
      x: 0,
      y: index,
      w: 1,
      h: 1,
    }));
  };

  return (
    <ReactGridLayout
      className="layout"
      layout={generateLayout()}
      cols={1}
      rowHeight={110}
      width={210}
      isResizable={false}
    >
      {taskList.map((task) => (
        <div
          key={
            task.id
              ? task.id.toString()
              : `undefined-id-${taskList.indexOf(task)}`
          }
        >
          <article class="message is-success tasks-message">
            <div class="message-header p-2">
              <p className="taskText">{task.text}</p>
              <button class="delete" aria-label="Delete"></button>
            </div>
            <div class="message-body p-2">
              <textarea
                className="textarea is-success is-size-7 p-2 .tasks-textarea"
                placeholder="コメント（40文字以内）"
                maxLength={40}
                rows="2"
                style={{ overflow: "hidden", resize: "none" }}
              ></textarea>
            </div>
          </article>
        </div>
      ))}
    </ReactGridLayout>
  );
};

export default Tasks;
