import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const Plan = () => {
  const [inputs, setInputs] = useState([{ id: Date.now(), value: "" }]);
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 4, h: 2 },
    { i: "b", x: 3, y: 0, w: 3, h: 1 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ]);

  // 新しい入力フィールドを追加する関数
  const addInput = () => {
    setInputs([...inputs, { id: Date.now(), value: "" }]);
  };

  // 特定の入力フィールドを削除する関数
  const removeInput = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  // 入力フィールドの数に基づいてレイアウトを更新する
  useEffect(() => {
    const newHeight = Math.max(2, inputs.length * 1); // 基本高さまたは入力数に応じて調整
    setLayout(
      layout.map((item) => (item.i === "a" ? { ...item, h: newHeight } : item))
    );
  }, [inputs, layout]);

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={8}
      rowHeight={100}
      width={1200}
      isResizable={true}
    >
      <article key="a" className="message is-danger">
        <div className="message-header">
          <input className="input" type="text" placeholder="Text input"></input>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {inputs.map((input) => (
            <div key={input.id} style={{ marginBottom: "10px" }}>
              <input className="input" type="text" placeholder="Text input" />
              <button
                className="button is-danger is-outlined is-small is-danger"
                onClick={() => removeInput(input.id)}
                style={{ marginLeft: "5px" }}
              >
                削除
              </button>
            </div>
          ))}
          <button className="button is-info" onClick={addInput}>
            追加
          </button>
        </div>
      </article>
    </GridLayout>
  );
};

export default Plan;
