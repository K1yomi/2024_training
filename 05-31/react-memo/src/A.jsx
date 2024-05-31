import React, { useState } from "react";
import B from "./B.jsx";
function A() {
  console.log("A渲染");
  const [count, setCount] = useState(1);
  const clickHandler = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h2>A -- {count}</h2>
      <button onClick={clickHandler}>增加</button>
      <B />
    </>
  );
}

export default React.memo(A);
