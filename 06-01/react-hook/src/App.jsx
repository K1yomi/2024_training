import { useState } from "react";

// React中的钩子函数只能在函数组件或自定钩子中调用
// 当我们需要将React 中钩子函数提取到一个公共区域时，就可以使用自定义钩子
// 自定义钩子其实就是一个普通函数，只是它的名字需要使用use开头
function useToggle() {
  const [value, setValue] = useState(true);
  const toggle = () => setValue(!value);
  return {
    value,
    toggle,
  };
}

function App() {
  const { value, toggle } = useToggle();

  return (
    <>
      <button onClick={toggle}>{value ? "true" : "false"}</button>
    </>
  );
}

export default App;
