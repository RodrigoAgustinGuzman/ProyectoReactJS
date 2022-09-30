import React from 'react'
import { useState } from 'react'


const ItemCount = ({initial, stock, onAdd}) => {

const [count, setCount]= useState(initial)

const increase = () => count < stock && setCount(count + 1)
const decrease = () => count > initial && setCount (count - 1)

  return (
    <div  style={{display: 'flex', jutifyContent:'center'}}>
      <button onClick={decrease} >-</button>
       {count}
      <button onClick={increase}>+</button>
      <button>Agregar al carrito</button>
    </div>
  )
}

export {ItemCount}
