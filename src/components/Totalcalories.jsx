import React from 'react'
import '../App.css'
const Calories = (props) => {
  return (
    <div>
      <h2>{props.totalnum} {props.name} = {props.calories} CALORIES </h2>
    </div>
  )
}

export default Calories