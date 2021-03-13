import React from 'react'
import MemoHooks from './components/memos/MemoHooks'
import Memorized from './components/memos/Memorized'
import Layout from './components/useLayoutEffect/RealLayoutEffect'
// import Characters from './components/examples/Characters'
// import MultipleCustomsHooks from './components/examples/MultipleCustomsHooks'
// import Focus from './components/useRef/Focus'
import RealExampleUseRef from './components/useRef/RealExampleUseRef'
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

      {/* <MultipleCustomsHooks/>
      <hr/>
      <Characters/> */}
      {/* <hr/>
      <Focus/> */}

      {/* <RealExampleUseRef/> */}
      {/* <Layout/> */}
      {/* <Memorized /> */}
      <MemoHooks />
     
    </div>
  )
}

export default HookApp
