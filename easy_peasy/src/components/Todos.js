import React, { Fragment } from "react";
import { useStore } from "easy-peasy";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useStore(state => state.todos);
  return (
    <Fragment>
      <h1>Todos</h1>
      <p>Click todo item to toggle completed</p>
      <hr />
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </Fragment>
  );
};

export default Todos;
