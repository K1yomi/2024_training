import "./index.css";

const count = 100;
function getName() {
  return "pink";
}

const list = [
  { id: 1001, name: "Vue" },
  { id: 1002, name: "React" },
  { id: 1003, name: "Nodejs" },
];

const isLogin = true;

const articleType = 1; //0,1,2
function getArticleTem() {
  if (articleType === 0) {
    return <div>我是无图模式</div>;
  } else if (articleType === 1) {
    return <div>我是单图模式</div>;
  } else if (articleType === 2) {
    return <div>我是三图模式</div>;
  }
}

function App() {
  return (
    // React 使用 JSX 来替代常规的 JavaScript
    // 在JSX中可以通过大括号语法{}识别JS中的表达式
    <div className="App">
      this is App
      {/* 使用引号传递字符串 */}
      {"this is message"}
      {/* 使用js变量 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      {/* 行内样式控制 */}
      <div style={{ color: "red" }}>this is a div </div>
      {/* 通过class类名控制 */}
      <div className="foo">this is a div </div>
      {/* 列表渲染 */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {/* 条件渲染 */}
      {/* 逻辑与&& */}
      {isLogin && <span>this is span</span>}
      {/* 三元运算 */}
      {isLogin ? <span>T</span> : <span>F</span>}
      {/* 复杂条件渲染 */}
      {getArticleTem()}
    </div>
  );
}

export default App;
