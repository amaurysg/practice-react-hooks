import React, {useRef, useState} from 'react'
import MultipleCustomsHooks from '../examples/MultipleCustomsHooks'


const RealExampleUseRef = () => {

 
  const [show, setShow] = useState(false)



  return (
    <div>
        
        <h1>Real Example useRef</h1>
        <hr/>

  
        { show && <MultipleCustomsHooks /> }
        <button 
          className='btn btn-outline-primary mt-3'
          onClick = { () => {setShow(!show)}  }  > 
          true / false
         </button>
      
    </div>
  )
}

export default RealExampleUseRef
