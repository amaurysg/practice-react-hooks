import React, { useReducer } from 'react'
import todoReducer from './todoReducer'
import './todoStyle.css'

const initialState = [{
  id: new Date().getTime(),
  desc : 'Aprender React', 
  done: false,
}]


const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState)
  console.log("To Do's", todos)

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    const newTodo={
       id: new Date().getTime(),
       desc : "new tarea", 
       done: false,
      }


      const action = {
        type: 'add', 
        payload: newTodo,
      }
      dispatch(action)
    }


  

  return (
    <div>
          <h1>Todo App ( {todos.length} )</h1>
          <hr/>
         <div className="row">
              <div className="col-7">
                   <ul className="list-group">
                        {
                          todos.map( (todo,i) => {

                            return (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                 >
                                    <p className="text-center" >{i + 1} - {todo.desc}</p> 
                                    <button className="btn btn-danger" > Delete</button>
                                </li>                    
                              )
                          }) 

                        }
                     </ul>
              </div>
              <div className="col-5">
                  <h4>Add Todo</h4>
                  <hr/>
                  <form action="" onSubmit={handleSubmit}>
                    <input 
                      className="form-control"
                      type="text"
                      name="description"
                      // onChange={(e)=>{ e.target.value}}
                      placeholder="Description to do..."
                      autoComplete="off"
                      />
                      <button
                      type="submit"
                      className="btn btn-outline-primary mt-1 "
                      
                      >
                        Add
                      </button>
                  </form>
              </div>

         </div>
    </div>
  )
}

export default TodoApp
