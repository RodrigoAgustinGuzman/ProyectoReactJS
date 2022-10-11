import React, {useContext} from 'react'
import './estiloItem.css'
import { Link } from 'react-router-dom'
import { cartContext } from '../../../context/CartContext'



const Item = ({producto}) => {
  return (
    <div className='cardContainer'>
      <div className='cardItem'>
         <p>{producto.product}</p>
       <img src={producto.image} alt="camisetas"/> 
       <p>${producto.price}</p>
       <Link to='detail'><button>Ver detalle</button></Link>
     </div>
     </div>
    )
    }
    

export default Item

