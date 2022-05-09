import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action";

const Todo = () => {
  const [user, setUser] = useState({});
  const todo = useSelector((state) => state.todo,
  (prev,curr) =>{ 
      console.log(curr)
      return prev
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const submitData = () => {
    dispatch(addTodo(user));
    console.log(user);
  };
  //   console.log(todo);
  return (
    <div>
      <input type="text" onChange={handleChange} name="username" />
      <button onClick={submitData}>submit</button>
      <div>
        {todo.map((el) => {
          return <h1 key={Math.random(1, 100)}> {el.username}</h1>;
        })}
      </div>
    </div>
  );
};
export { Todo };