import React from 'react'
import './estiloItem.css'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount'



const Item = ({producto}) => {
  return (
    <div className='cardContainer'>
      <div className='cardItem'>
         <p>{producto.product}</p>
       <img src={producto.image} alt="camisetas"/> 
       <p>${producto.price}</p>
       <ItemCount initial={1} stock={producto.stock}/>
       <Link to='detail'><button>Ver detalle</button></Link>
     </div>
     </div>
    )
    }
    

export default Item

