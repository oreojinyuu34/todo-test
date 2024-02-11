import React from "react";
import ReactGridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const Practice = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 1 },
    { i: "c", x: 4, y: 0, w: 1, h: 1 },
  ];

  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
      isResizable={true}
    >
      <div key="a" className="a">
        A
      </div>
      <div key="b" className="b">
        B
      </div>
      <div key="c" className="c">
        C
      </div>
    </ReactGridLayout>
  );
};

export default Practice;
