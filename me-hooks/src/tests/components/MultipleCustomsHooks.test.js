import React from "react";
import { shallow } from "enzyme";
import MultipleCustomsHooks from "../../components/examples/MultipleCustomsHooks";

describe("Test in component MultipleCustomsHooks", () => {
  test(" Debe de mostrarse correctamente ", () => {
    const wrapper = shallow(<MultipleCustomsHooks />);
    expect(wrapper).toMatchSnapshot();
  });
});
