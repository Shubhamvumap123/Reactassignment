import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addCounter, reduceCounter } from "./redux/action";
import { Todo } from "./components/todo";

// import { store } from "./redux/store";

function App() {
  // const state = store.getState();
  const counter = useSelector((state) => state.counter);
  // console.log(state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          dispatch(addCounter(1));
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch(reduceCounter(1));
        }}
      >
        reduce
      </button>g    
      <div>
        <Todo />
      </div>
    </div>
  );
}

export default App;