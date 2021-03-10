import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

  const [state, setState] = useState({data:null, loading: true, error:null})

  useEffect(() => {
    //Reset values 
    setState({data:null, loading:true, error:null})

    //Fetch
    fetch(url)
      .then(resp => resp.json())
      .then(data =>{
        setState({
          data,
          loading: false,
          error: null
          
        })
      })
//In action only when url change
  }, [url])

  
  return state
}

export default useFetch
