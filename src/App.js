import React, { useState } from "react";
import Header from "./components/header/Header";
import ReactGridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import MoveSwitch from "./components/task/button/MoveSwitch";
import AddTaskCardButton from "./components/task/button/AddTaskCardButton";
import TaskCards from "./components/task/TaskCards";

const App = () => {
  const [isMovable, setIsMovable] = useState(false); // 移動可能状態を管理
  const [currentLayout, setCurrentLayout] = useState([
    // 初期レイアウト
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
  ]);
  const [taskCards, setTaskCards] = useState(["a"]); // タスクカードの情報を管理

  const [cardLimitMessage, setCardLimitMessage] = useState(""); // メッセージ表示用のステート追加

  const toggleMove = () => {
    setIsMovable(!isMovable);
  };

  const onLayoutChange = (layout) => {
    setCurrentLayout(layout);
  };

  const addTaskCard = () => {
    // タスクカードの数が4個未満の場合のみ追加処理を行う
    if (taskCards.length < 4) {
      const newkey = `b${Date.now()}`;
      const newX = (currentLayout.length * 1) % 3; // 画面幅に応じてX位置を調整
      const newY = Math.floor((currentLayout.length * 2) / 3); // 新しい行に移動
      setTaskCards([...taskCards, newkey]);
      setCurrentLayout([
        ...currentLayout,
        { i: newkey, x: newX, y: newY, w: 1, h: 1 },
      ]);
      setCardLimitMessage(""); // カード追加成功時はメッセージをクリア
    } else {
      // カードが4個以上の場合のメッセージ
      setCardLimitMessage("カードは4個までです");
    }
  };
  return (
    <div className="app has-background-success-light">
      <Header />
      <div className="box caution mb-0">
        <ul>
          <li className="is-size-6">
            ・保存機能ないよ。リロードしたら最初から！
          </li>
          <li className="is-size-6">・入力したいときは移動をOFFにして！</li>
          <li className="is-size-6">・カードの追加は4個まで！</li>
        </ul>
      </div>
      <div className="columns px-6 py-2 mb-0">
        <div className="column is-one-fifth">
          <AddTaskCardButton onAddTaskCard={addTaskCard} />
        </div>
        <div className="column field  has-addons mb-0">
          <p className="has-text-black has-text-weight-bold my-auto">移動：</p>
          <MoveSwitch isActive={isMovable} toggleIsActive={toggleMove} />
        </div>
      </div>
      {/* メッセージ表示 */}
      {cardLimitMessage && (
        <p className="has-text-danger">{cardLimitMessage}</p>
      )}
      {/* 注意書き */}
      <ReactGridLayout
        className="layout"
        layout={currentLayout}
        onLayoutChange={onLayoutChange}
        cols={8}
        rowHeight={150}
        width={2200}
        isResizable={false}
        compactType={null}
        isDraggable={isMovable}
      >
        {taskCards.map((key) => (
          <div key={key}>
            <TaskCards />
          </div>
        ))}
      </ReactGridLayout>
    </div>
  );
};

export default App;
