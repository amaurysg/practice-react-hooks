import React, { useEffect, useState } from 'react'
import Message from './Message'

const SimpleForm = () => {
  //1. When component render fo, useEffect action

  const [formState, setFormState] = useState({
    name: '', 
    email: '',
  })

  //Desestructure values form formState
  const {name, email} = formState

//Here used email, this useEffect active when 
//email change 
  useEffect(() => {
   /* console.log("Hey change your email") */
  },[name])
  
  useEffect(() => {
   /* console.log("Hey change your email") */
  },[email])


  useEffect(() => {
   /* console.log("Hey change your email") */
  },[])


  const handleInputChange = ({target}) =>{
    /* console.log(target.value) */
    setFormState({
      ...formState, 
      [target.name]:target.value
     
    })
  }

  return (
    <>
        <h1>Use Effect</h1>
        <h3>Simple Form</h3>
        <div className="form-group">
          <input 
          type="text"
          //this props is main
          name='name'
          className="form-control"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input 
          type="text"
          //this props is main
          name='email'
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
          />
        </div>

        {
          name=='amaury' &&  <Message/>

        }

       
    </>
  )
}

export default SimpleForm
