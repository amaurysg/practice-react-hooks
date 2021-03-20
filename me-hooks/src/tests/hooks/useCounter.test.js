import { renderHook } from "@testing-library/react-hooks";
import useCounter from "../../hooks/useCounter";

describe("", () => {
  test(" Debe retornar valores por defecto ", () => {
    //Here called renderHooks from @@testing-library/react-hooks
    //this received useCounter, our hooks.
    const { result } = renderHook(() => useCounter());
    console.log(result.current);
    console.log(result.current.ini);
    console.log(result.current.dec);

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.inc).toBe("function");
    expect(typeof result.current.dec).toBe("function");
    expect(typeof result.current.ini).toBe("function");
  });
});
