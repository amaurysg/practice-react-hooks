import React, { useEffect, useReducer } from "react";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import todoReducer from "./todoReducer";
import "./todoStyle.css";

//Init mode
//Init return is initialState
const init = () => {
  //Here captures values from localStorage
  //captures items from localStore from todos, else capture one array []
  return JSON.parse(localStorage.getItem("todos")) || [];

  //   return [{
  //   id: new Date().getTime(),
  //   desc : 'Either string',
  //   done: false,
  // }]
};

//Initial component
const TodoApp = () => {
  //Here called useReducer
  //receive function reducer , initialState, and init (see init above )
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //testing state (todos)
  console.log("To Do's", todos);

  ///**** ADD LOCAL STORAGE ****///
  //useEffect for localstorage, when todos change
  //Only add when (todos) change
  useEffect(() => {
    //Add to localStorage
    //Here add to localStorage, we used JSON.stri... because localstorage only read strings
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  ///**** handleDelete ****///
  const handleDelete = (todoId) => {
    console.log(todoId);
    //create action
    //connect dispatch
    dispatch({
      type: "delete",
      payload: todoId,
    });
  };
  ///**** handleToogle ****///
  const handleToogle = (todoId) => {
    dispatch({
      type: "toogle",
      payload: todoId,
    });
  };

  const handleAddToDo = (newToDo) => {
    //Action add, type, payload
    dispatch({
      type: "add",
      payload: newToDo,
    });
  };

  return (
    <div>
      <h1>App ( {todos.length} )</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToogle={handleToogle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddToDo={handleAddToDo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
