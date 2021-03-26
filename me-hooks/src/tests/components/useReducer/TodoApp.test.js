import { mount, shallow } from "enzyme";
import { act } from "@testing-library/react";
import TodoApp from "../../../components/useReducer/TodoApp";
import demoTodos from "../../fixtures/demoTodos";

describe("Test en component TodoApp", () => {
  // const handleDelete = jest.fn();
  const wrapper = shallow(<TodoApp />);

  //mock localStorage
  //Storage viene con jest
  Storage.prototype.setItem = jest.fn(() => {});

  test("Debe de mostrarte correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe agregar un ToDo", () => {
    //mount funciona como shallow, pero tiene mas alcance, más scope
    //cuando necesitamos mas contexto de otros componentes
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find("TodoAdd").prop("handleAddToDo")(demoTodos[0]);
      wrapper.find("TodoAdd").prop("handleAddToDo")(demoTodos[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe("App ( 2 )");
    //esperar que se haya llamado dos veces
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("Que se borre un todo", () => {
    wrapper.find("TodoAdd").prop("handleAddToDo")(demoTodos[0]);
    wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);
    expect(wrapper.find("h1").text().trim()).toBe("App ( 0 )");
  });
});
