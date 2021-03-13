import React, { useEffect, useRef, useState } from 'react'

const useFetch = (url) => {

  const isMounted = useRef(true)

  const [state, setState] = useState({data:null, loading: true, error:null})

  useEffect(() => {
    return ()=>{
      isMounted.current = false
    }
  }, [])


  useEffect(() => {
    //Reset values 
    // setState({data:null, loading:true, error:null})

    //Fetch
    fetch(url)
      .then(resp => resp.json())
      .then(data =>{

        

            if(isMounted.current){
              setState({     
              loading: false,
              error: null,
              data
              
            })

            }else {
              console.log('set stated not call')
            }



      })
//In action only when url change
  }, [url])


  return state
}

export default useFetch
