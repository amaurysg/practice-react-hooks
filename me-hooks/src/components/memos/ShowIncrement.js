import React, { memo } from 'react'


//This asigned memo for memorized this component and function.
//Every the function envolved in memo

//Noticed that received props increment (funtion in other component)
const ShowIncrement = memo(({increment}) => {

  console.log('rendering again INCREMENT 😧')

  return (
    <button
      className="btn btn-primary"
      onClick={() =>{
        //Increment on five 
        //Here used the function prop from other component.
        increment(5)
      } }
    >
      Increment
    </button>
  )
})

export default ShowIncrement