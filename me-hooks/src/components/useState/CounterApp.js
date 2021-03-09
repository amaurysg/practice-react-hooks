import React, { useState } from 'react'
import './CounterApp.css'

const CounterApp = () => {

  //We noticed that counter have many values, so 
  //I need change just one value... 
  //I need a spread(propagar) operator
  const [counter, setCounter] = useState({
    counter1:10,
    counter2:20,
    counter3:30,
    counter4:40,
    counter5:50,
    })
   /*  console.log(counter1) */
    

    //Here extract two values from counter
    const {counter1, counter2} = counter


  return (
    <>
        <h1>Counter {counter1} </h1>
        <h1>Counter {counter2} </h1>
        <hr/>
        <button 
        className="btn btn-primary"
        onClick={() => {
         setCounter({
                     //Here used spread operator for copy all values , 
                     //next change value counter1
                     //I recommend look the state in devtools navigator
                    ...counter,
                    counter1: counter1 +1, 
                    
                  })
        } }
        > +1</button>
    </>
  )
}

export default CounterApp
