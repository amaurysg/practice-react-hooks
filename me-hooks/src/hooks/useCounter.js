import { useState } from "react";

const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState); //10

  const ini = () => {
    setCounter(initialState);
  };

  const inc = () => {
    setCounter(counter + 1);
  };
  const dec = () => {
    setCounter(counter - 1);
  };

  return { counter, inc, dec, ini };
};

export default useCounter;
