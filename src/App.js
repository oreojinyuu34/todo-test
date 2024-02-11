import React, { useState } from "react";
import Header from "./components/header/Header";
import TaskCards from "./components/task/TaskCards";
import ReactGridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const App = () => {
  const [isMovable, setIsMovable] = useState(false); // 移動可能状態を管理
  const [currentLayout, setCurrentLayout] = useState([
    // 初期レイアウト
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 1, y: 0, w: 1, h: 1 },
    { i: "c", x: 2, y: 0, w: 1, h: 1 },
  ]);

  // 移動可能状態を切り替える
  const toggleMove = () => {
    setIsMovable(!isMovable);
  };

  // レイアウト変更時に呼ばれる関数
  const onLayoutChange = (layout) => {
    setCurrentLayout(layout);
  };

  return (
    <div className="app has-background-success-light">
      <Header />
      <button
        onClick={toggleMove}
        className={`button mt-4 ml-4 ${isMovable ? "is-info" : "is-danger"}`}
      >
        {isMovable ? "移動切り替え：移動許可" : "移動切り替え：移動不可"}
      </button>
      <ReactGridLayout
        className="layout"
        layout={currentLayout}
        onLayoutChange={onLayoutChange}
        cols={8}
        rowHeight={150}
        width={2200}
        isResizable={false}
        verticalCompact={false}
        isDraggable={isMovable}
      >
        <div key="a">
          <TaskCards />
        </div>
        <div key="b">
          <TaskCards />
        </div>
        <div key="c">
          <TaskCards />
        </div>
      </ReactGridLayout>
    </div>
  );
};

export default App;
