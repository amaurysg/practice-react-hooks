import React, { useEffect, useState } from 'react'

const Message = () => {


 //This is a example unmount component.


 const [coors, setcoors] = useState({x:0,y:0})
 const { x,y }= coors

  useEffect(() => {

    const moveOn = (e)=>{
      const coors = {x: e.x, y: e.y}
      setcoors(coors)
    }

    window.addEventListener('mousemove', moveOn)

    //first console show when component init
    console.log("Component render")
    return () => {
       //second console show when component hidden (first console out) 
      console.log("Render out")
    }
  }, [])

  return (
    <div>
        <h1>Genial</h1>
        <p>x: {x} y:{y} </p>
    </div>
  )
}

export default Message
