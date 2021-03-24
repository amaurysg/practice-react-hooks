import React from "react";
import { shallow } from "enzyme";
import MultipleCustomsHooks from "../../components/examples/MultipleCustomsHooks";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";
// import useCounter from "../../hooks/useCounter";
jest.mock("../../hooks/useFetch");
// jest.mock("../../hooks/useCounter");
// jest.mock("../../hooks/useCounter");

describe("Test in component MultipleCustomsHooks", () => {
  // useCounter.mockReturnValue({
  //   counter: 1,
  //   inc: () => {},
  // });

  // useCounter.mockReturnValue({
  //   counter: 1,
  //   inc: () => {},
  // });

  test(" Debe de mostrarse correctamente ", () => {
    //Nos interesa la información que va a retornar
    //useFetch ya esta probado.
    //haremos un mock (ver arriba)

    //Necesitamos proveer valores (aquí simulamos los datos)
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomsHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test(" Debe de mostrar Información ", () => {
    //Nos interesa la información que va a retornar
    //useFetch ya esta probado.
    //haremos un mock (ver arriba)

    //Necesitamos proveer valores (aquí simulamos los datos)
    useFetch.mockReturnValue({
      data: [{ author: "Amaury", quote: "Hola" }],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomsHooks />);
    //En la siguiente prueba, si existe class alert NO DEBERÍA EXISTIR
    expect(wrapper.find(".alert").exists()).toBe(false);
    //Si esta el HOLA, debería estar "HOLA"
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola");
    //Dentro del footer deberia estar "Amaury"
    expect(wrapper.find("footer").text().trim()).toBe("Amaury");

    console.log(wrapper.html());
  });
});
