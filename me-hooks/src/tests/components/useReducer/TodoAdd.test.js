import { shallow } from "enzyme";
import TodoAdd from "../../../components/useReducer/TodoAdd";

describe("Test en componenten <TodoAdd/>", () => {
  const handleAddToDo = jest.fn();

  const wrapper = shallow(<TodoAdd handleAddToDo={handleAddToDo} />);

  test("Debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("no debe llamar ADDTODO ", () => {
    //Validamos que no se dispare la funcion submit
    const formSubmit = wrapper.find("form").prop("onSubmit");
    // console.log(formSubmit);
    //Add preventDefault (debido a que en la funcion principal en el comp esta definido)
    formSubmit({ preventDefault() {} });
    //Esperamos que la funcion handleAddToDo haya sido llamada 0 veces
    expect(handleAddToDo).toHaveBeenCalledTimes(0);
  });
  test("Debe llamar la función handleAddToDo ", () => {
    const value = "React Jest Enzyme";
    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description",
      },
    });
    const formSubmit = wrapper.find("form").prop("onSubmit");
    // console.log(formSubmit);
    //Add preventDefault (debido a que en la funcion principal en el comp esta definido)
    formSubmit({ preventDefault() {} });
    //Esperamos que la funcion handleAddToDo haya sido llamada 1 vez
    expect(handleAddToDo).toHaveBeenCalledTimes(1);
    expect(handleAddToDo).toHaveBeenCalledWith(expect.any(Object)); // { }
    //Se espera un objeto, pero id tiene que ser tipo Number
    expect(handleAddToDo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    }); // { }

    //Test reset() value vació
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
