import React, { useRef, useEffect, MutableRefObject } from "react";

type Props = { x: number; y: number };

function Cursor({ x, y }: Props) {
  const cursorRef = useRef() as MutableRefObject<HTMLDivElement>;
  const cursorOuterRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const x0 = x - cursorRef.current.offsetWidth / 2;
    const y0 = y - cursorRef.current.offsetHeight / 2;

    const x1 = x - cursorOuterRef.current.offsetWidth / 2;
    const y1 = y - cursorOuterRef.current.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x0}px, ${y0}px)`,
    };

    const keyframes1 = {
      transform: `translate(${x1}px, ${y1}px)`,
    };
    cursorRef.current.animate(keyframes, { duration: 400, fill: "forwards" });
    cursorOuterRef.current.animate(keyframes1, {
      duration: 1000,
      fill: "forwards",
    });
  }, [x, y]);

  return (
    <div className="cursor hidden md:block">
      <div ref={cursorRef} className="cursor-inner"></div>
      <div ref={cursorOuterRef} className="cursor-outer"></div>
    </div>
  );
}

export default Cursor;
