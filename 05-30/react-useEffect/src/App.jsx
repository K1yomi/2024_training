import { useState } from "react";
import { useEffect } from "react";

const URL = "http://geek.itheima.net/v1_0/channels";

function App() {
  // useEffect专门用来处理那些不能直接写在组件内部的代码
  // 获取数据、记录日志、检查登录、设置定时器等，这那些和组件渲染无关，但却有可能对组件产生副作用的代码
  // usefffect()中的回调函数会在组件每次渲染完毕之后执行，这也是它和写在函数体中代码的最大的不同，函数体中的代码会在组件渲染前执行
  // 而usefffect()中的代码是在组件渲染后才执行，这就避免了代码的执行影响到组件渲染

  // useEffect（）是一个钩子函数，需要一个函数作为参数
  // 这个作为参数的函数，将会在组件渲染完毕后执行
  // 在开发中，可以将那些会产生副作用的代码编写到useEffect的回调函数中，这样就可以避免这些代码影响到组件的渲染

  // useEffect()的第二个参数是一个数组，指定了第一个参数（副效应函数）的依赖项，只有该变量发生变化时，副效应函数才会执行
  // 通常会将Effect中使用的所有的局部变量都设置为依赖项

  // 如果第二个参数是一个空数组，就表明副效应参数没有任何依赖项
  // 因此，副效应函数这时只会在组件加载进入 DOM 后执行一次，后面组件重新渲染，就不会再次执行
  // 由于副效应不依赖任何变量，所以那些变量无论怎么变，副效应函数的执行结果都不会改变，所以运行一次就够了
  const [myList, setList] = useState([]);
  useEffect(() => {
    async function getList() {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      // console.log(jsonRes)
      setList(jsonRes.data.channels);
      // 清除副作用
      return () => {};
    }
    getList();
  }, []);
  return (
    <>
      {/* useEffect不是由事件引起,而是由渲染本身引起的操作,比如发送ajax请求,更改DOM等 */}
      <ul>
        {myList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
