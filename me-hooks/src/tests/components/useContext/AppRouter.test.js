import { mount } from "enzyme";
import AppRouter from "../../../components/useContext/AppRouter";
import { UserContext } from "../../../components/useContext/UserContext";

describe("", () => {
  const user = {
    id: 1,
    name: "Amaury",
  };

  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
  test("should ", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
