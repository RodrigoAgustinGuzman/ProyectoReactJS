import React from 'react'
import { useCartContext } from '../../../context/CartContext'
import './ItemCartestilo.css'

const ItemCart = ({product}) => {
     const {removeProduct} = useCartContext ();

  return (
    <div className='itemCart'>
         <img src={product.image} alt={product.product} />
        <div>  
         <p>Titulo:{product.product}</p>
         <p>Cantidad: {product.cantidad}</p>
         <p>Precio: {product.price}</p>
         <p>Subtotal: ${product.cantidad * product.price}</p>
         <button onClick={()=> removeProduct(product.id)} >Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart
