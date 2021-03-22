import React from "react";
import { shallow } from "enzyme";
import MultipleCustomsHooks from "../../components/examples/MultipleCustomsHooks";
import useFetch from "../../hooks/useFetch";
// import useCounter from "../../hooks/useCounter";
jest.mock("../../hooks/useFetch");
// jest.mock("../../hooks/useCounter");

describe("Test in component MultipleCustomsHooks", () => {
  // useCounter.mockReturnValue({
  //   counter: 1,
  //   inc: () => {},
  // });

  test(" Debe de mostrarse correctamente ", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomsHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test(" Debe de mostrar Información ", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Amaury", quote: "Hola" }],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomsHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola");
    expect(wrapper.find("footer").text().trim()).toBe("Amaury");

    console.log(wrapper.html());
  });
});
