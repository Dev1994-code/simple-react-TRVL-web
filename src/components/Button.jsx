import React from 'react'
import "./button.css"
import {Link} from "react-router-dom"

const STYLES = ["btn-primary", "btn-outline"]

export const Button = ({children,type,onClick,buttonStyle,buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : STYLES[0];

    return (
        <Link to="/sign-up" className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type} 
            >
                {children}
            </button>
        </Link>
    )
}
  
