import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import HomeScreen from "../../../components/useContext/HomeScreen";
import { UserContext } from "../../../components/useContext/UserContext";

describe("Test HomeScreen", () => {
  const user = {
    name: "Amaury",
    email: "amaurysotog@gmail.com",
  };

  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <HomeScreen />
    </UserContext.Provider>
  );
  test("Debe renderizar", () => {
    act(() => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
