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
    expect(wrapper).toMatchSnapshot();
  });
  test(" Debe tener dos <TodoListItem/> ", () => {
    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);
    const hola = wrapper.find("TodoListItem").at(0).html();
    console.log(hola);
    expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );
  });
});
