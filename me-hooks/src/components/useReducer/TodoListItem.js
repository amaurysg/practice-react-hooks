import React from "react";

const TodoListItem = ({ todo, i, handleDelete, handleToogle }) => {
  return (
    <>
      <li key={todo.id} className="list-group-item">
        <p
          className={`${todo.done && "completed"} `}
          //todo.id 626262626 send to function
          onClick={() => handleToogle(todo.id)}
        >
          {i + 1} - {todo.desc}
        </p>
        <button
          className="btn btn-danger"
          //todo.id 626262626 send to function
          onClick={() => handleDelete(todo.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};
export default TodoListItem;
