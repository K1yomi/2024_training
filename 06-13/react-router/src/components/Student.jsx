import {
  useParams,
  useLocation,
  useMatch,
  useNavigate,
} from "react-router-dom";

const STU_DATA = [
  {
    id: 1,
    name: "刘备",
  },
  {
    id: 2,
    name: "关羽",
  },
  {
    id: 3,
    name: "张飞",
  },
  {
    id: 4,
    name: "诸葛亮",
  },
];

const Student = () => {
  // 获取请求参数
  const { idd } = useParams();
  const stu = STU_DATA.find((item) => item.id === +idd);

  // 获取当前的地址信息
  const location = useLocation();
  console.log(location);
  // useLocation()里面的属性
  // pathname —— 请求的路径
  // search —— 查询字符串
  // hash —— hash字符串
  // state —— 历史记录中的状态对象，可以用来在跳转时传递数据

  // 用来检查当前url是否匹配某个路由
  const match = useMatch("/about");
  // 如果路径匹配，则返回一个对象，不匹配则返回null
  console.log(match);

  // useNavigate 获取一个用于条件页面的函数
  const nav = useNavigate();
  console.log(nav);
  const clickHandler = () => {
    //跳转到about界面
    nav("/about"); //使用push，会产生历史记录
    nav("/about", { replace: true }); //使用replace，不会产生历史记录，返回时返回上上个界面
  };

  return (
    <div>
      <h2>
        {stu.id}--{stu.name}
      </h2>
      <button onClick={clickHandler}>点我一下</button>
    </div>
  );
};
export default Student;
