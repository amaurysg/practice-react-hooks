import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe("", () => {
  //First, inital object with values, same as initialForm from component
  const initialForm = {
    name: "amaury",
    email: "amaurysotog@gmail.com",
  };

  test(" Debe regresar iun formulario por defecto ", () => {
    //here used renderHooks from react-hooks
    //in this case called the useForm with initialForm for above.
    const { result } = renderHook(() => useForm(initialForm));
    //Desestructure of array of values from {result.current}
    const [values, handleInputChange, reset] = result.current;
    // console.log(values, handleInputChange, reset);

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Debe cambiar el valor de formulario (cambiar name)", () => {
    //here used renderHooks from react-hooks
    //in this case called the useForm with initialForm for above.
    const { result } = renderHook(() => useForm(initialForm));
    //Desestructure of array of values from {result.current}
    // (,) this is values... too i can called as values.
    const [, handleInputChange] = result.current;

    //Here simulated action in function handleInputChange
    act(() => {
      handleInputChange({
        //Called target, target is paramet in main function
        target: {
          name: "name",
          //Modifiqued value by Fernando
          value: "Fernando",
        },
      });
    });

    //Here called values  {name: 'Fernando', email: 'amaurysotog@gmail.com}
    const [values] = result.current;
    // console.log(values) output // {name: 'Fernando', email: 'amaurysotog@gmail.com};

    //expect values with ...values but name in 'Fernando', other values equals
    expect(values).toEqual({ ...initialForm, name: "Fernando" });

    // expect(values).toEqual({ ...initialForm, name: "Fernando" });
  });

  test("Debe re-establecer el formulario con RESET (ini) ", () => {
    //here used renderHooks from react-hooks
    //in this case called the useForm with initialForm for above.
    const { result } = renderHook(() => useForm(initialForm));
    //Desestructure of array of values from {result.current}  (,) values, handleInputChange reser
    const [values, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Fernando",
        },
      });
      //here simulated reset
      reset();
    });

    // const [values] = result.current;
    // console.log(values);
    expect(values).toEqual(initialForm);
  });
});
