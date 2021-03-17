import React, { useState } from "react";
import "./todoStyle.css";

const TodoListItem = ({
  todo,
  i,
  handleDelete,
  handleToogle,
  handleUpdate,
}) => {
  const [editDesc, setEditDesc] = useState(false);

  const [newDesc, setNewDesc] = useState(todo.desc);

  const changeEditDesc = (e) => {
    // alert("fila");

    console.log("chanfe");
    // setNewDesc(newDesc);
    console.log("newDesc:", newDesc);
    setEditDesc(!editDesc);
    console.log(newDesc);
  };

  return (
    <>
      <li key={todo.id} className="list-group-item">
        {editDesc ? (
          <form
            action=""
            className="formulario-editar-tarea"
            // onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
            />
            <button
              type="button"
              className="formulario-editar-tarea__btn"
              onClick={(e) => {
                handleUpdate(todo.id, newDesc);
                setEditDesc(false);
              }}
            >
              Update
            </button>
          </form>
        ) : (
          <div>
            <p
              className={`${todo.done && "completed"} `}
              //todo.id 626262626 send to function
              onClick={() => handleToogle(todo.id)}
            >
              {i + 1} - {todo.desc}
            </p>
            <button
              type="button"
              className="btn btn-outline-primary"
              //todo.id 626262626 send to function
              onClick={(e) => {
                e.preventDefault();
                changeEditDesc(!editDesc);
              }}
            >
              Update
            </button>
            <button
              className="btn btn-danger"
              //todo.id 626262626 send to function
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        )}
      </li>
    </>
  );
};

export default TodoListItem;
