import React, { useCallback, useEffect, useState } from 'react'
import '../../HooksApp.css'
import ShowDecrement from './ShowDecrement'
import ShowIncrement from './ShowIncrement'

const CallBackHook = () => {

  //Callbacks functions: 
  //1. mandar una funcion a un componente hijo 
  //2. 

  const [counter, setCounter] = useState(10)  


  const increment = useCallback((num)=>{
    setCounter(counter => counter + num)
  }, [setCounter]) 

  const decrement = useCallback(()=>{
    setCounter(counter => counter - 1)
  }, [setCounter]) 

  useEffect(() => {
    //????
    // When used a function inside useEffec, also defined who callback the 
    // dependencie
  }, [increment])


  return (
    <div>
      <h1>CallBack {counter} </h1>
      {/* here receive a function who const to other component */}
      <ShowIncrement increment={increment} />
      <ShowDecrement decrement={decrement} />
      <hr/>

    </div>
  )
}

export default CallBackHook
