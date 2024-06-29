import { Link, NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">主页</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
        <li>
          {/* NavLink是特殊版本的Link，可以根据不同的情况设置不同的样式 */}
          {/* activeClassName —— 字符串 链接激活时的class
              activeStyle —— 对象 链接激活时的样式
              isActive —— 函数，可动态判断链接是否激活
              style —— 函数，动态设置样式
              className —— 函数，动态设置class值 */}
          <NavLink
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "yellow" } : null;
            }}
            to="/student"
          >
            学生
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default Menu;
