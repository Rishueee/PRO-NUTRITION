import React from 'react'
import Calories from './Totalcalories'
import { useState } from 'react'
import '../App.css'
const Box = (props) => {
    const [totalnum,setTotalnum] = useState(0)
    const [calories,setCal] = useState(0)

    function calnum(e){
        e.preventDefault()
        setCal(props.food.cal*totalnum)
    }

    function change(e){
        if(e>=0){
            setTotalnum(e)
        }
        else{
            setTotalnum(0)
        }
    }

    function makeitzero(){
        setTotalnum(0)
        setCal(0)
    }
  return (
    <div className='foodbox'>
        <div className='foodboxin'>
            <div>
                <img src={props.food.img} alt=" " />
            </div>
            <div>
                <h3>{props.food.name}</h3>
                <h5>Single {props.food.name} Calories = {props.food.cal}</h5>
            </div>
            <div>
                <input type="number" placeholder='Enter a number' defaultValue={totalnum} onChange={(e)=>change(e.target.value)}/>
            </div>
            <div>
                <button onClick={calnum}>+</button>
            </div>
        </div>
      <Calories name = {props.food.name} calories = {calories} totalnum = {totalnum}/>
      <button onClick={makeitzero} className='makeitzero'>Reset</button>
    </div>
  )
}

export default Box
