import React from 'react'
import useFetch from '../../hooks/useFetch'

const Characters = () => {
  
  const {loading, data}= useFetch(`https://www.breakingbadapi.com/api/characters`)
  
  console.log('characters',data)

  const {name,img} = !!data && data[4]
  
  // const {name, img }= !!data && data[0]
   console.log(name, img)



 



  return (
    <div>
          <p> Characters </p> 
          <ul>
           <li> {name}</li>
           <img src={img}/>
          </ul>
          
    </div>
  )
}

export default Characters

  
