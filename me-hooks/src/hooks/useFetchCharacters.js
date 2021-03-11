import React, { useEffect, useState } from 'react'

const useFetchCharacters =  (url) => {

  const [state, setState] = useState([])

  useEffect(  async () =>  {
    //Reset values 
    // setState({data:null, loading:true, error:null})

    //Fetch
    const response = await fetch(url)
    const data = await response.json()
    console.log('data-response', data)
    setState(data)
   
//In action only when url change
  }, [url])


  return state
}

export default useFetchCharacters
