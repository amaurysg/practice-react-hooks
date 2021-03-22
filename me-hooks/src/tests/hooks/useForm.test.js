import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe("", () => {
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
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Fernando",
        },
      });
    });

    const [values] = result.current;
    // console.log(values);
    expect(values).toEqual({ ...initialForm, name: "Fernando" });

    // expect(values).toEqual({ ...initialForm, name: "Fernando" });
  });

  test("Debe re-establecer el formulario con RESET (ini) ", () => {
    //here used renderHooks from react-hooks
    //in this case called the useForm with initialForm for above.
    const { result } = renderHook(() => useForm(initialForm));
    //Desestructure of array of values from {result.current}
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Fernando",
        },
      });
      reset();
    });

    const [values] = result.current;
    // console.log(values);
    expect(values).toEqual(initialForm);
  });
});
