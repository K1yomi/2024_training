import { Outlet, Navigate } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Navigate 组件用来跳转到指定的位置 */}
      <Navigate to="/student/1"></Navigate>

      <h2>关于我们师徒四人</h2>
      <ul>
        <li>唐僧</li>
        <li>孙悟空</li>
        <li>猪八戒</li>
        <li>沙和尚</li>
      </ul>
      <Outlet></Outlet>
    </>
  );
};
export default About;
