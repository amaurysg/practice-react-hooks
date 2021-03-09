import React from 'react'
import Message from './components/useEffect/Message'
import SimpleForm from './components/useEffect/SimpleForm'
import CounterApp from './components/useState/CounterApp'
import CounterCustomsHooks from './components/useState/CounterCustomsHooks'

const HookApp = () => {
  return (
    <div>
      <CounterApp/>
      <hr/>
      <CounterCustomsHooks/>
      <hr/>
      <SimpleForm/>
     
    </div>
  )
}

export default HookApp
