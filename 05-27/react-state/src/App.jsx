import { useState } from "react";

function App() {
  // useState函数会返回一个数组
  // 第一个元素，是初始值，初始值只用来显示数据，直接修改不会触发组件的重新流染
  // 数组中的第二个元素，是一个函数，通常会命名为setXxx，这个函数用来修改state，调用其修改state后会触发组件的重新渲染，并且使用函数中的值作为新的state
  const [count, setCount] = useState(0);
  const TimeSum = () => {
    //setState（）会触发组件的重新渲染，它是异步的
    // 所以当调用setState（）需要用旧state的值时，一定要注意有可能出现计算错误的情况
    // 为了避免这种情况，可以通过为setState()传递回调函数的形式来修改state的值
    setTimeout(() => {
      setCount((pre) => pre + 1);
    }, 1000);
  };

  const [form, setForm] = useState({ name: "jack", age: 18 });
  const changeForm = () => {
    setForm({
      // 浅拷贝
      ...form,
      name: "pink",
    });
  };

  return (
    <div className="App">
      {/* 在React中,当组件渲染完毕后,再修改组件中的变量,不会使组件重新渲染*/}
      {/*要使得组件可以收到变量的影响,必须在变量修改后对组件进行重新渲染 */}
      {/* 修改状态 */}
      <button onClick={TimeSum}>{count}</button>
      <br />
      <button onClick={changeForm}>修改{form.name}</button>
    </div>
  );
}

export default App;
