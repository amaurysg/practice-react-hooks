import React, {useState} from 'react'
import useCounter from '../../hooks/useCounter'
import Small from './Small'

const Memorized = () => {

  const {counter, inc} = useCounter(10)
  const [show, setShow] = useState(true)

  console.log(counter)
  
  return (
    <div>
        <h1>Memorized</h1>
        <h3>Counter  <Small value={counter} />  </h3>
       
       
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

export default Memorized
