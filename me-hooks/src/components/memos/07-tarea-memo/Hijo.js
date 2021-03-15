import React, { memo } from 'react'

//function with memo envolved
//Notice call the props numero, increment from padre component
export const Hijo = memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
