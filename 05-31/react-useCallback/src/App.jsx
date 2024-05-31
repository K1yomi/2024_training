import { useCallback, useState } from "react";
import A from "./A.jsx";

function App() {
  console.log("App渲染");
  const [count, setCount] = useState(1);
  const clickHandler = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <>
      <h2>App -- {count}</h2>
      <button onClick={clickHandler}>增加</button>
      <A onAdd={clickHandler} />
    </>
  );
}

export default App;
