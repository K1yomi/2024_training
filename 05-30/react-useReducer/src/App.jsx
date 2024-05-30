import { useReducer } from "react";

const countReducer = (state, action) => {
  // 可以根据action中不同type来执行不同的操作
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUB":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  // 当你的state的过于复杂时,你就可以使用的可以对state进行整合
  // const [count, setCount] = useState(1);

  // const addHandler = () => {
  //   setCount((prevState) => prevState + 1);
  // };
  // const subHandler = () => {
  //   setCount((prevState) => prevState - 1);
  // };

  // useReducer(reducer, initialArg, init)
  // 参数：
  // reducer: 整合函数
  //          对于我们当前state的所有操作都应该在该函数中定义，该函数的返回值，会成为state的新值
  // initialArg ：state的初始值，作用和useState()中的值是一样
  // 返回值：
  //    数组:
  //    第一个参数，state 用来获取state的值
  //    第二个参数，state 修改的派发器,通过派发器可以发送操作state的命令,具体的修改行为将会由另外一个函数(reducer)执行
  const [count, countDispatch] = useReducer(countReducer, 1);

  const addHandler = () => {
    countDispatch({ type: "ADD" });
  };
  const subHandler = () => {
    countDispatch({ type: "SUB" });
  };
  return (
    <>
      <div>
        {/* <button onClick={subHandler}>减少</button>
        {count}
        <button onClick={addHandler}>增加</button> */}

        <button onClick={subHandler}>减少</button>
        {count}
        <button onClick={addHandler}>增加</button>
      </div>
    </>
  );
}

export default App;
