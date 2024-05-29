import { useState } from "react";
import "./App.css";
import classes from "./App.module.css";

function App() {
  const [blackBorder, setblackBorder] = useState(true);
  // 声明式内联样式
  const pStyle = {
    color: "skyblue",
    backgroundColor: "#bfa",
    border: blackBorder ? "black solid 1px" : "skyblue solid 1px",
  };

  const clickHandler = () =>
    blackBorder ? setblackBorder(false) : setblackBorder(true);
  return (
    <>
      <p
        style={{
          color: "red",
          backgroundColor: "#bfa",
          border: "black solid 1px",
        }}
      >
        我是一个段落
      </p>

      {/* 写在行内不美观 */}
      <p style={pStyle}>我也是一个段落</p>
      {/* 外部样式表，设置一些通用的样式 */}
      <p className={`p3 ${blackBorder ? "" : "blueBorder"}`}>我还是一个段落!</p>
      <button onClick={clickHandler}>点我一下</button>

      {/* CSS模块
      使用步骤：1.创建xxx.module.css 2.在组件中引入css 3.通过classes设置类 */}
      {/* 可以很好解决类名冲突的问题 */}
      <p className={classes.p3}>我又是一个段落</p>
    </>
  );
}

export default App;
