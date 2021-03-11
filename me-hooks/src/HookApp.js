import React from 'react'
import Characters from './components/examples/Characters'
import MultipleCustomsHooks from './components/examples/MultipleCustomsHooks'
/* import FormCustomsHooks from './components/useEffect/FormCustomsHooks'
import Message from './components/useEffect/Message'
import SimpleForm from './components/useEffect/SimpleForm'
import CounterApp from './components/useState/CounterApp'
import CounterCustomsHooks from './components/useState/CounterCustomsHooks' */

const HookApp = () => {
  return (
    <div>
{/*       <CounterApp/>
      <hr/>
      <CounterCustomsHooks/>
      <hr/>
      <SimpleForm/>
      <hr/>
      <FormCustomsHooks/> */}

      <MultipleCustomsHooks/>
      <hr/>
      <Characters/>
     
    </div>
  )
}

export default HookApp
