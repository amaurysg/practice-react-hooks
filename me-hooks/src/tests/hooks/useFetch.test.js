import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../../hooks/useFetch";

describe("Pruebas a useFetch", () => {
  test("Debe retornar la información por defecto", () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );

    const { data, loading, error } = result.current;
    // console.log(data);

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("Debe tener la información deseada", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );

    await waitForNextUpdate();

    const { data, loading, error } = result.current;
    console.log(data);
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test("Manejo del error", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/apid/users?page=2`)
    );

    await waitForNextUpdate();

    const { data, loading, error } = result.current;
    console.log(data);
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("No se encontró la info 😧");
  });
});
