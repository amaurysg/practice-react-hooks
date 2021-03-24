import { shallow } from "enzyme";
import RealExampleUseRef from "../../components/useRef/RealExampleUseRef";

describe("Test componet RealExampleUseRef", () => {
  const wrapper = shallow(<RealExampleUseRef />);

  test("Debe mostrarse correctamente ", () => {
    //render correct
    expect(wrapper).toMatchSnapshot();
    //here wait that MultipleCustomsHooks  not exist with false !
    expect(wrapper.find("MultipleCustomsHooks").exists()).toBe(false);
  });

  test("Debe mostrar el componente <MultipleCustomsHooks />", () => {
    //Here simulated click
    wrapper.find("button").simulate("click");

    //here wait that MultipleCustomsHooks exist with true !
    expect(wrapper.find("MultipleCustomsHooks").exists()).toBe(true);
  });
});
