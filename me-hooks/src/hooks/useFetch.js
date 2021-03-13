import React, { useEffect, useRef, useState } from 'react'

const useFetch = (url) => {

  //create useRef
  const isMounted = useRef(true)

  const [state, setState] = useState({data:null, loading: true, error:null})

  //This useEffect only for unmount component
  useEffect(() => {
    //this return only act when component is unmount 
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

        
            //This condicion stated ref of component 
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
