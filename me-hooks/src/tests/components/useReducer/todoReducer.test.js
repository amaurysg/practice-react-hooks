import todoReducer from "../../../components/useReducer/todoReducer";
//import demoTodos with data false for test.
import demoTodos from "../../fixtures/demoTodos";

//data falsa para pruebas, ojo atributos reales.

describe("Test in todoReducer", () => {
  test(" Debe retornar el estado por defecto ", () => {
    //Remember the reducer always return one state
    const state = todoReducer(demoTodos, {});
    // console.log(state);
    //Wait that state is a demoTodos (demoTodos view above)
    expect(state).toEqual(demoTodos);
  });

  test(" Debe agregar un todos ", () => {
    //Here create newTodo for simulated datas
    const newTodo = {
      id: 3,
      desc: "Mongo",
      done: false,
    };
    //Here create action for simulated action (see file todoReducer)
    const action = {
      type: "add",
      payload: newTodo,
    };

    //Remember the reducer always return one state
    //add action with type and payload
    const state = todoReducer(demoTodos, action);
    // console.log(state);
    //Wait that state is a demoTodos (demoTodos view above)
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test(" Debe de borrar un todo ", () => {
    //The action.payload = ID del todo
    const action = {
      type: "delete",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[1]]);
  });
  test(" Debe debe hacer TOOGLE del todo", () => {
    //The action.payload = ID del todo
    const action = {
      type: "toogle",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);

    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
  test(" Debe debe hacer update a un todo", () => {
    //The action.payload = ID del todo
    const action = {
      type: "update",
      payload: 1,
      desc: "OTRA COSA",
    };
    const state = todoReducer(demoTodos, action);
    // console.log(state);
    expect(state[0].desc).toBe("OTRA COSA");
  });
});
