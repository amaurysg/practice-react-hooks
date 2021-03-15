import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';
import '../../../HooksApp.css'

const Padre = () => {

    //here array with values
    const numeros = [2,4,6,8,10];
    //Here state initial
    const [valor, setValor] = useState(0);

    //Function incrementar with useCallback 
    const incrementar = useCallback(( num ) => {
                //Notice valor => valor (this valor)
                setValor( valor => valor + num )
                //Dependecie to change
                }, [setValor]) 

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                    //here add the props
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}

export default Padre
