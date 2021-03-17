import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleDelete, handleToogle, handleUpdate }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo, i) => {
          return (
            // TodoListItem , todo, index, funciones delete, toogle
            <TodoListItem
              key={todo.id}
              todo={todo}
              i={i}
              handleDelete={handleDelete}
              handleToogle={handleToogle}
              handleUpdate={handleUpdate}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
