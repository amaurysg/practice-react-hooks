
//General concepts useReducers
//1. Created one initial state, in this case is a array witch obj
const initialState = [{
  id:1, 
  todo: 'Comprar', 
  done: false
}]


//2. Created function reducer, this function have two paramets
//   state initial  + action
const todoReducer = (state = initialState, action)=>{
  
  if (action?.type === 'add'){
    return [...state, action.payload]
  }

  return state

}

//3. here result of return state  // { id:1, todo: 'Comprar', done: false }
let todos = todoReducer()

//Logic add object to principal array

//IMPORTANT
//no se usa push en react, push modifica o muta los objetos.
// todos.push() NOT!! 

//new object, next we'll add 
const newTodo = {
  id: 2, 
  todo: 'Leer', 
  done: false
}

//This is ours action, object with two paramets 
const add  = {
  type: 'add', 
  payload: newTodo
}

todos = todoReducer(todos, add)

console.log(todos)