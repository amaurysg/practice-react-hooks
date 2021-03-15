import React, { memo } from 'react'


const ShowDecrement = memo(({decrement}) => {

  console.log('Rendering again DECREMENT 😐')

  return (
     <button
      className="btn btn-warning"
      onClick={() =>{
        decrement()
      } }
    >
      Increment
    </button>
  )
})

export default ShowDecrement
