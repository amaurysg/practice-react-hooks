import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm'



const FormCustomsHooks = () => {
  
  const [values, handleInputChange] = useForm({
    name: '', 
    email: '',
    password: ''
  })

  //Desestructure values form formState
  const {name, email, password} = values

  useEffect(() => {
    console.log("Email change")
   
  }, [email])

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(values)
    
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Use Effect</h1>
        <h3>Simple Form Customs Hooks</h3>
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
        
        <div className="form-group">
          <input 
          type="password"
          //this props is main
          name='password'
          className="form-control"
          placeholder="*****"
  /*         autoComplete="off" */
          value={password}
          onChange={handleInputChange}
          />
        </div>

          <button type="submit" className="btn btn-primary"> Guardar</button>

       
    </form>
  )
}

export default FormCustomsHooks
