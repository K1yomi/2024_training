import { useState } from "react";
import A from "./A.jsx";

function App() {
  // React组件会在两种情况下发生重新渲染
  // 第一种，当组件自身的state发生变化时
  // 第二种，当组件的父组件重新渲染时
  // 第一种情况下的重新渲染无可厚非，state都变了，组件自然应该重新进行渲染，但是第二种情况似乎并不是总那么的必要。

  console.log("App渲染");
  const [count, setCount] = useState(1);
  const clickHandler = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h2>App -- {count}</h2>
      <button onClick={clickHandler}>增加</button>
      <A />
    </>
  );
}

export default App;
