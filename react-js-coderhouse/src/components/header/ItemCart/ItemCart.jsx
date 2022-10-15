import React from 'react'
import { useCartContext } from '../../../context/CartContext'
import './ItemCartestilo.css'

const ItemCart = ({producto}) => {
     const {removeProduct} = useCartContext ();

  return (
    <div className='itemCart'>
        <img src={producto.image} alt={producto.product}/>
        <div>
         <p>Titulo:{producto.product}</p>
         <p>Cantidad: {producto.cantidad}</p>
         <p>Precio: {producto.price}</p>
         <p>Subtotal: ${producto.cantidad * producto.price}</p>
         <button onClick={()=> removeProduct(producto.id)} >Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart
