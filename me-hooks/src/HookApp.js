import React from 'react'
import CounterApp from './components/useState/CounterApp'
import CounterCustomsHooks from './components/useState/CounterCustomsHooks'

const HookApp = () => {
  return (
    <div>
      <CounterApp/>
      <hr/>
      <CounterCustomsHooks/>
    </div>
  )
}

export default HookApp
