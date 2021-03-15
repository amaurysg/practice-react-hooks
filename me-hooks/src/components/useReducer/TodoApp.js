import React, { useEffect, useReducer } from 'react'
import useForm from '../../hooks/useForm'
import todoReducer from './todoReducer'
import './todoStyle.css'

//Init lo que sea que retorne será el initial state
const init = () => {
   //Here 
    return JSON.parse(localStorage.getItem('todos')) || [] 

//   return [{
//   id: new Date().getTime(),
//   desc : 'Aprender React', 
//   done: false,
// }]
}

const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)
  console.log("To Do's", todos)

  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  })

  //useEffect for localstorage, when todos change
  //Only add when (todos) change 
  useEffect(() => {
    //Add to localStorage
    //Here add to localStorage, we used JSON.stri... because localstorage only read strings
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])

  console.log(description)

  const handleSubmit = (e)=>{
    e.preventDefault();

    //trim() delete spaces in strings
    if(description.trim().length <=1){
      return
    }
    
    const newTodo={
       id: new Date().getTime(),
       desc : description, 
       done: false,
      }


      const action = {
        type: 'add', 
        payload: newTodo,
      }
      dispatch(action)
      reset()
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
                      value={description}
                      onChange={handleInputChange}
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
