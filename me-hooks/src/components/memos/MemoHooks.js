import React, {useMemo, useState} from 'react'
import useCounter from '../../hooks/useCounter'
import procesoPesado from '../helpers/ProcesoPesado'


const MemoHooks = () => {

  const {counter, inc} = useCounter(2000)
  const [show, setShow] = useState(true)


  const memoProceso =  useMemo(() => procesoPesado(counter), [counter])
  
  return (
    <div>
        <h1>MemoHooks</h1>
        <h3>Counter  <small> {counter }</small> </h3>
       
       <p> {memoProceso} </p>
        <button className="btn btn-primary" onClick={inc}>+</button>
       
        <button 
        className="btn btn-outline-primary ml-3" 
        onClick={()=>{
          setShow(!show)
        }}>
          show/hidde {JSON.stringify(show)} 
          </button>
    </div>
  )
}

export default MemoHooks
