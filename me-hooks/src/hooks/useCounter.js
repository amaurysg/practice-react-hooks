import { useState } from "react"

const useCounter = ( initialState = 10) => {

  const [counter, setCounter] = useState(initialState) //10

  const inc = () =>{
    setCounter(counter +1)
  }
  const dec = () =>{
    setCounter(counter -1)
  }

  const ini = () =>{
    setCounter(initialState)
  }

  return { counter, inc, dec, ini}

}

export default useCounter
