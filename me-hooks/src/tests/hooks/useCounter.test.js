import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "../../hooks/useCounter";

describe("", () => {
  test(" Debe retornar valores por defecto ", () => {
    //Here called renderHooks from @@testing-library/react-hooks
    //this received useCounter, our hooks.
    const { result } = renderHook(() => useCounter());
    console.log(result.current);
    console.log(result.current.ini);

    //In this test counter to be (10) initial Value
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.inc).toBe("function");
    expect(typeof result.current.dec).toBe("function");
    expect(typeof result.current.ini).toBe("function");
  });
  test(" Debe retornar el mismo valor dado ", () => {
    //Here called renderHooks from @@testing-library/react-hooks
    //this received useCounter, our hooks.
    const { result } = renderHook(() => useCounter(100));

    //In this test counter to be (100) initial Value
    expect(result.current.counter).toBe(100);
  });
  test(" Debe incrementar el counter en 1 ", () => {
    //Here called renderHooks from @@testing-library/react-hooks
    //this received useCounter, our hooks.
    const { result } = renderHook(() => useCounter(100));
    const { inc } = result.current;

    act(() => {
      inc();
    });

    const { counter } = result.current;
    expect(counter).toBe(101);
  });
  test(" Debe decrementar  el counter en 1 ", () => {
    //Here called renderHooks from @@testing-library/react-hooks
    //this received useCounter, our hooks.
    const { result } = renderHook(() => useCounter(100));
    const { dec } = result.current;

    act(() => {
      dec();
    });

    const { counter } = result.current;
    expect(counter).toBe(99);
  });
  test(" Debe resetear en 10 ", () => {
    //Here called renderHooks from @@testing-library/react-hooks
    //this received useCounter, our hooks.
    const { result } = renderHook(() => useCounter(100));
    const { dec, ini } = result.current;

    act(() => {
      dec();
      ini();
    });

    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
