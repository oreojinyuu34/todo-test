import React from "react";
import ReactGridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import MoveSwitch from "./button/MoveSwitch";

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
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
  const [isMovable, setIsMovable] = React.useState(false); // 移動可能状態を管理
  // 移動可能状態を切り替える
  const toggleMove = () => {
    setIsMovable(!isMovable);
  };

  return (
    <div>
      <ReactGridLayout
        className="layout"
        layout={generateLayout()}
        cols={1}
        rowHeight={120}
        width={210}
        isResizable={false}
        isDraggable={isMovable}
      >
        {taskList.map((task) => (
          <div
            key={
              task.id
                ? task.id.toString()
                : `undefined-id-${taskList.indexOf(task)}`
            }
          >
            <article className="message is-success tasks-message">
              {" "}
              <div className="message-header p-2">
                {" "}
                <p className="taskText">{task.text}</p>
                <div className="buttons has-addons are-small is-right is-small">
                  {/* <button
                    type="button"
                    className="button is-info is-small mr-1 p-0"
                  >
                    <span className="material-symbols-outlined">edit</span>{" "}
                  </button> */}
                  <button
                    type="button"
                    className="button is-danger is-small p-0"
                    onClick={() => handleDelete(task.id)}
                  >
                    <span className="material-symbols-outlined">delete</span>{" "}
                  </button>
                </div>
              </div>
              <div className="message-body p-2">
                {" "}
                <textarea
                  className="textarea is-success is-size-7 p-2 tasks-textarea"
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
      {/* タスクリストが空でない場合にのみ MoveSwitch を表示 */}
      {taskList.length > 0 && (
        <div className="field  has-addons  is-justify-content-center mb-0">
          <p className="has-text-black has-text-weight-bold">移動：</p>
          <MoveSwitch isActive={isMovable} toggleIsActive={toggleMove} />
        </div>
      )}
    </div>
  );
};

export default Tasks;
