import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/modules/counterStore";
import { ActionCreators } from "redux-undo";
function App() {
  const { count } = useSelector((state) => state.counter1.present);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(ActionCreators.undo())}>撤销</button>
      <button onClick={() => dispatch(ActionCreators.redo())}>恢复</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}

export default App;
