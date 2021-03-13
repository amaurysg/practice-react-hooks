import React, { useRef } from 'react'
import '../../HooksApp.css'

const Focus = () => {

  const inputRef = useRef()
  
  const handleFocus = () =>{
        inputRef.current.select()
        console.log(inputRef)
        // document.querySelector('input').focus()
  }

  return (
    <div>
        <h1>Focus</h1>
        
        <input 
          ref={inputRef}
          type="text"
          placeholder="Here Focus"       
        />

        <button onClick={handleFocus} className="btn btn-outline-primary mt-2"> Focus</button>
    </div>
  )
}

export default Focus
