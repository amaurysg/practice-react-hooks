import { mount } from "enzyme";
import LoginScreen from "../../../components/useContext/LoginScreen";
import { UserContext } from "../../../components/useContext/UserContext";

describe("Test en LoginScreen", () => {
  const setUser = jest.fn();
  //wrapper
  const wrapper = mount(
    <UserContext.Provider value={{ setUser: setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test("Debe renderizar", () => {
    //snapshot
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe ejecutar el setUser con el arg esperado", () => {
    wrapper.find("button").prop("onClick")();
    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      fname: "Amaury",
    });
  });
});
