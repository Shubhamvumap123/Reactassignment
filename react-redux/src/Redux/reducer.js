import { ADD_COUNT, REDUCE_COUNT, ADD_TODO } from "./actionType";

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case ADD_COUNT:
      return {
        ...store,
        counter: store.counter + payload,
      };
    case REDUCE_COUNT:
      return {
        ...store,
        counter: store.counter - payload,
      };
    case ADD_TODO:
      return {
        ...store,  
        todo: [...store.todo, payload],
      };
    default:
      return store;
  }
};