import { useRef } from "react";

function App() {
  // 获取原生的DOM对象：
  // 1. 可以使用传统的document 来对DOM进行操作(太麻烦)
  // 2. 直接从React处获取DOM对象

  // 1. 创建一个存储DOM对象的容器
  // 使用 useRef()钩子函数
  // ① React中的钩子函数只能用于函数组件或自定义钩子
  // ② 钩子函数只能直接在函数组件中调用
  const h1Ref = useRef();
  const clickhandler = () => {
    console.log(h1Ref); // {current: h1}
    console.log(h1Ref.current); // <h1>我是标题</h1>
  };
  return (
    <div>
      {/* 2. 将容器设置为想要获取DOM对象元素的ref属性 */}
      <h1 onClick={clickhandler} ref={h1Ref}>
        我是标题
      </h1>
      <button>按钮1</button>
      <br></br>
      <button>按钮2</button>
    </div>
  );
}

export default App;
