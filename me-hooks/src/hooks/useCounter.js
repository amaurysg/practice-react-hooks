import { useState } from "react"

const useCounter = ( initialState = 10) => {

  const [state, setstate] = useState(initialState) //10

  const inc = (factor = 1) =>{
    setstate(state + factor)
  }
  const dec = (factor = 1) =>{
    setstate(state - factor)
  }

  const ini = () =>{
    setstate(initialState)
  }

  return { state, inc, dec, ini}

}

export default useCounter
