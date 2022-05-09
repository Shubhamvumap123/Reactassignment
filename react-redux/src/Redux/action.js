import { ADD_COUNT, REDUCE_COUNT, ADD_TODO } from "./actionType";

const addCounter = (data) => {
  return {
    type: ADD_COUNT,
    payload: data,
  };
};
const reduceCounter = (data) => {
  return {
    type: REDUCE_COUNT,
    payload: data,
  };
};

const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export { addCounter, reduceCounter, addTodo };