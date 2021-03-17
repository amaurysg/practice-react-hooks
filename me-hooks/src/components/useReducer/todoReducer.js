//1. Function reducer, recieve state + action
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((todo) => todo.id !== action.payload); //6373822727
    // case 'toogle':
    //   return state.map(todo =>{

    //     if (todo.id === action.payload){
    //       return {
    //         ...todo,
    //         done: !todo.done
    //       }
    //     }else{
    //       return todo
    //     }

    //   })
    //Here other way of case toogle. Used conditional ternarios
    case "toogle":
      return state.map((todo) =>
        //if id 626262626 === 626262626
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    case "update":
      console.log("action:", action.desc);
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, desc: action.desc } : todo
      );

    default:
      return state;
  }
};

export default todoReducer;
