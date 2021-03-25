import { shallow } from "enzyme";
import TodoList from "../../../components/useReducer/TodoList";
import demoTodos from "../../fixtures/demoTodos";

describe("Test in component <TodoList />", () => {
  //Defined the functions.
  const handleDelete = jest.fn();
  const handleToogle = jest.fn();
  const handleUpdate = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToogle={handleToogle}
      handleUpdate={handleUpdate}
    />
  );

  test(" Debe renderizar correctamente ", () => {
    //correct snapshot
    expect(wrapper).toMatchSnapshot();
  });
  test(" Debe tener dos <TodoListItem/> ", () => {
    //Search component TodoListItem
    //TodoListItem toBe num = a todos numero de elementos de un arreglo.
    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);
    const hola = wrapper.find("TodoListItem").at(0).html();
    console.log(hola);
    //asegurarno de que tenga propiedas correctas a traves de prop()
    //toEqual a dos objetos diferentes
    expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );
  });
});
