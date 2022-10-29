import React from "react";

type Props = { x: number; y: number };

function Cursor({ x, y }: Props) {
  return (
    <div>
      <div className="cursor" style={{ left: x, top: y }}></div>
      <div
        className="cursor-inner z-[1000]"
        style={{ left: x - 4, top: y - 4 }}
      ></div>
    </div>
  );
}

export default Cursor;
