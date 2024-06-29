import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Student from "./components/Student";
import Hello from "./components/Hello";

function App() {
  return (
    <>
      <Menu></Menu>

      <Routes>
        {/* Routes中Route只有一个会被匹配 */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}>
          <Route path="hello" element={<Hello></Hello>}></Route>
        </Route>
        <Route path="/student/:idd" element={<Student></Student>}></Route>
      </Routes>
    </>
  );
}

export default App;
