// task 1
import React from 'react'

const TabButton = (props) => {

  const handleClick = (e) => {
    console.log("Hello world!")
  }

  return (
    <div>
        <li><button onClick={handleClick}>{props.children}</button></li>
        
        <li><button>{props.label}</button></li>
    </div>
  )
}

export default TabButton