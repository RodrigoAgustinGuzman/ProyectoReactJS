import React from 'react'
import { ItemCount } from '../ItemCount'

const Item = ({producto}) => {

  return (
    <div >
      <p>{producto.product}</p>
      <img src={producto.image} alt="camisetas"/> 
      <h3>${producto.price}</h3>
      <ItemCount initial={1} stock={producto.stock}/>
      <button>Ver detalle</button>
    </div>
  )
}

export default Item
