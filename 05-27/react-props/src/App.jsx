/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { createContext } from "react";

// 父传子
// props:对象里面包含了父组件传递过来的所有数据
// 父组件会自动在名为children的prop属性中接受子组件标签里面的内容
function Son(props) {
  return (
    <div>
      this is son, {props.name},{props.age},{props.children}
    </div>
  );
}

// 子传父
function Son1({ onGetMsg }) {
  const sonMsg = "this is son msg";
  return <button onClick={() => onGetMsg(sonMsg)}>子传父</button>;
}

// 兄弟传兄弟,先子传父,再父传子
function A({ onGetAname }) {
  const name = "this is A";
  return (
    <div>
      this is A compnent,
      <button onClick={() => onGetAname(name)}>sendA</button>
    </div>
  );
}
function B({ name }) {
  return <div>this is B compnent,{name}</div>;
}

// 跨层传递
const MsgContext = createContext();
function C() {
  return (
    <div>
      this is C compnent
      <D></D>
    </div>
  );
}
function D() {
  // 通过useContext钩子函数使用数据
  const msg = useContext(MsgContext);
  return <div>this is D compnent,{msg}</div>;
}

function App() {
  const name = "Tom";
  const getMsg = (msg) => console.log(msg);
  const [ABname, setName] = useState("");
  const getAname = (names) => {
    console.log(names);
    setName(names);
  };
  const appMsg = "this is app msg";

  return (
    <>
      {/* 父传子 */}
      <Son
        name={name}
        age={18}
        isTrue={false}
        list={["vue", "react"]}
        obj={{ name: "jack" }}
        cb={() => console.log(123)}
        child={<span>this is span</span>}
      >
        <i>this is i</i>
      </Son>

      {/* 子传父 */}
      <Son1 onGetMsg={getMsg}></Son1>

      {/* 兄弟传兄弟 */}
      <A onGetAname={getAname}></A>
      <B name={ABname}></B>

      {/* 跨层传递 */}
      {/* D在C中，将App的参数传递给D */}
      {/* 通过Provider组件提供数据 */}
      <MsgContext.Provider value={appMsg}>
        <C></C>
      </MsgContext.Provider>
    </>
  );
}

export default App;
