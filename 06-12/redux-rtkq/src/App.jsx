import { useGetStudentQuery } from "./store/modules/studentApi";

function App() {
  const { data, isSuccess, isLoading } = useGetStudentQuery();
  console.log(isSuccess);
  return (
    <>
      {isLoading && <p>数据加载中...</p>}
      {isSuccess &&
        data.data.channels.map((item) => <p key={item.id}>{item.name}</p>)}
    </>
  );
}

export default App;
