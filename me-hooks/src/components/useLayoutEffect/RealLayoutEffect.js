import React, { useLayoutEffect, useRef, useState } from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'
import './Layout.css'


const Layout = () => {

  const {counter, inc} =  useCounter(1)
  const {loading, data} =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  // console.log('data fetch1', data)
  const {author, quote} = !!data && data[0]

  const pTag = useRef()
  const [box, setBox] = useState({})

  useLayoutEffect(() => {
  //  console.log( pTag.current.getBoundingClientRect() )
   setBox(pTag.current.getBoundingClientRect())

  }, [quote])

//  console.log(loading, data)
//  console.log(author, quote)
  

  return (
    <div>
        <h1> Layout Breaking Bad Quotes</h1>
        <hr/>


         

            <blockquote className="blockquote ">
              <p className="mb-0" ref={pTag}> {quote} </p>
              <hr/>
              <footer className="blockquote-footer text-right">{author}</footer>

           </blockquote>
            <pre>
            {  JSON.stringify(box, null, 3)}
            </pre>
         
        <button className="btn btn-primary" onClick={inc}>Next quote</button>

    </div>
  )
}

export default Layout
