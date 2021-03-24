import { shallow } from "enzyme";
import TodoListItem from "../../../components/useReducer/TodoListItem";
import demoTodos from "../../fixtures/demoTodos";

describe("Test in TodoListItem", () => {
  const handleDelete = jest.fn();
  const handleToogle = jest.fn();
  const handleUpdate = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      i={0}
      handleDelete={handleDelete}
      handleToogle={handleToogle}
      handleUpdate={handleUpdate}
    />
  );

  test("Debe render correct ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de llamar la funcion handleDelete, ", () => {
    //jest.fn()
    //toHaveBeenCalledWith
    wrapper.find(".btn-danger").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test("Debe de llamar la funcion handleToogle ", () => {
    //jest.fn()
    //toHaveBeenCalledWith
    wrapper.find("p").simulate("click");
    expect(handleToogle).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test("Debe mostrar text correct ", () => {
    //contenido del parrafo
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(`1 - ${demoTodos[0].desc}`);
  });

  test("Debe tener class completed ", () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(<TodoListItem todo={todo} />);

    expect(wrapper.find("p").hasClass("completed")).toBe(true);
  });
});
