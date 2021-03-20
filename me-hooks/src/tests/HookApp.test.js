import { shallow } from "enzyme";
import HookApp from "../HookApp";

describe("Test to Component HookApp", () => {
  test("Snapshot Render component", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
