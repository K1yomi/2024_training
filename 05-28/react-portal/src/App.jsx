import { createPortal } from "react-dom";
import NoPortalExample from "./NoPortalExample";
import PortalExample from "./PortalExample";
import "./App.css";
// createPortal允许你将JSX作为children渲染至DOM的不同部分
function App() {
  return (
    <>
      <div style={{ border: "2px solid black" }}>
        <p>这个子节点被放置在父节点div中</p>
        {/* 如果没有portal，第二个<p>将放置在父级<div>中，但portal会将其“传送”到document.body中 */}
        {createPortal(<p>这个子节点被放置在document body中</p>, document.body)}
      </div>
      <br />
      {/* 常用来渲染模态对话框 */}
      <div className="clipping-container">
        <NoPortalExample />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
    </>
  );
}

export default App;
