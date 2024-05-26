// 使用函数定义了一个组件
function Button() {
  return <button>这是一个组件按钮</button>;
}

function App() {
  const handleClick1 = () => {
    console.log("按钮1被点击了");
  };
  // 传递自定义参数
  const handleClick2 = (name) => {
    console.log("按钮2被点击了", name);
  };
  // 既要传递自定义参数,又要传递事件对象e
  const handleClick3 = (name, e) => {
    console.log("按钮3被点击了", name, e);
  };
  return (
    <div className="App">
      {/* 事件绑定 */}
      {/* on + 事件名称 = {事件处理程序} */}
      <button onClick={handleClick1}>按钮1</button>
      <button onClick={() => handleClick2("pink")}>按钮2</button>
      <button onClick={(e) => handleClick3("pink", e)}>按钮3</button>

      {/* 组件,两种渲染方式 */}
      {/* 自闭和 */}
      <Button />
      {/* 成对标签 */}
      <Button></Button>
    </div>
  );
}

export default App;
