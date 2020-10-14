import React from 'react'

const Btn = (props) => {
    return(
        <button {...props}>
            {props.label}
        </button>
    )
}

export default Btn
