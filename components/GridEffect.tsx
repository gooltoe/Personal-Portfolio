import React, { useEffect, useState, useRef } from "react";
import useWindowDimension from "../hooks/useWindowDimension";

type Props = {};

function GridEffect({}: Props) {
  const { width, height } = useWindowDimension();

  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [total, setTotal] = useState(0);
  const tiles = useRef(null);

  const size = 90;

  const isBorder = (index: number) => {
    const col = Math.floor((width as number) / size);
    const row = Math.floor((height as number) / size);

    if (
      (width as number) > 767 &&
      (index % col === 0 || index % col === col - 1)
    ) {
      return true;
    }
    return false;
  };

  const createTile = (index: number) => {
    // if (isBorder(index)) {
    //   return (
    //     <div
    //       key={index}
    //       onClick={(e) => console.log(index)}
    //       className="tile before:inset-0"
    //     ></div>
    //   );
    // }
    return (
      <div
        key={index}
        onClick={(e) => console.log(index)}
        className="tile"
      ></div>
    );
  };

  function createTiles(quantity: number) {
    return Array.from(Array(quantity)).map((tile, index) => {
      return createTile(index);
    });
  }

  useEffect(() => {
    if (width && height) {
      const col = Math.floor(width / size);
      const row = Math.floor(height / size);
      setTotal(col * row);

      console.log(total);
      console.log(col, row);
      console.log(width / size, height / size);

      // tiles.current.style.gridTemplateColumns = `1fr 1fr`;
      // tiles.current.style.gridTemplateRows = `1fr 1fr`;
      (
        tiles.current as any
      ).style.gridTemplateColumns = `repeat(${col}, minmax(0,1fr))`;
      (
        tiles.current as any
      ).style.gridTemplateRows = `repeat(${row}, minmax(0,1fr))`;
    }
  }, [width, height]);

  return (
    <div className="bg-hero h-screen w-screen ">
      <div ref={tiles} className="w-full h-full grid">
        {createTiles(total)}
      </div>
    </div>
  );
}

export default GridEffect;
