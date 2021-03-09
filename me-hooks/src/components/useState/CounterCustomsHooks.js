import React from 'react'
import useCounter from '../../hooks/useCounter'

const CounterCustomsHooks = () => {

  const {state, inc, dec, ini} = useCounter()


  return (
    <div>
        <h1>Counter Customs Hooks {state} </h1>
        <button onClick={()=> inc(2)} className="btn btn-primary">+</button>
        <button onClick={()=> dec(2)} className="btn btn-danger">-</button>
        <button onClick={ini} className="btn btn-warning"> Reset </button>
    </div>
  )
}

export default CounterCustomsHooks
