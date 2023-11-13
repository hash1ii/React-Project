
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Header = () => {
  
const[color,setcolor]= useState("Black")
const [count,setcount]=useState(0)

const increment=() => {
setcount(count+ 1)
}
const decrement=() => {
setcount(count- 1)
}
const changecolor = () => {
  setcolor("Red");
}

  return (
    <div>
        <h1 className='bg-success text-white' >lEARN reACT eVENTS</h1>
       <h2>My fav Color is {color}</h2>
       <Button onClick={changecolor}>Change Color</Button>
<br/>
<br/>

       <h1>Counter is {count}</h1>
       <Button onClick={increment} className='m-2 bg-success'>+</Button>
       <Button onClick={decrement} className='m-2 bg-danger'>-</Button>
  </div> 
  )
}

export default Header
