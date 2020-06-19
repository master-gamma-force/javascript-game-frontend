import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

const LinkedButton = ({ children, onClick, to }) => {
  return (
    <Link to={to}>
      <button type="button" onClick={onClick} className="Button">
        {children}
      </button>
    </Link>
  )
}

const AnchorButton = ({ children, onClick, href }) => {
  return (
    <a href={href}>
      <button type="button" onClick={onClick} className="Button">
        {children}
      </button>
    </a>
  )
}

const Button = ({ children, onClick, to, href }) => {
  return (
    <>
      {
        to ? <LinkedButton to={to}>{children}</LinkedButton> :
          href ? <AnchorButton href={href}>{children}</AnchorButton> : (
            <button type="button" onClick={onClick} className="Button">
              {children}
            </button>
          )
      }
    </>
  )
}

export default Button
