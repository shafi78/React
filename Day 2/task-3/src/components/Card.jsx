// task 2
import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <p>{props.children}</p>
    </div>
  )
}

export default Card