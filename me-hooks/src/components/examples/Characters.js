import React from 'react'
import useFetchCharacters from '../../hooks/useFetchCharacters'
// import chara from '../../data/db'
import './Characters.css'

const Characters = () => {  
  
 const data = useFetchCharacters('https://www.breakingbadapi.com/api/characters') 
 

  return (
    <div className="card__container">
       
          
              {
                data.map((c,i)=>{
                  
                  return(
                    <>

                      <div className="card__character" key={i}>
                          <h5>{c.name}</h5>
                          <img src={c.img} alt={c.name}/>
                          <p >{c.nickname}</p>
                      </div >
                    </>  
                  )
                } )
              }
              
        
          
    </div>
  )
}

export default Characters

  
