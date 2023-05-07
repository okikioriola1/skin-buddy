import React from 'react'
import './actionButton.css'

const ActionButton = ({backgroundColor, className,  name}) => {
  return (
    <button className={`${backgroundColor} ${className} button`}>{name}</button>
  )
}

export default ActionButton