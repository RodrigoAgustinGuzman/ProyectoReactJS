import React from 'react'
import { useCartContext } from '../../../context/CartContext'
import '../ItemCart/itemCartestilo'

const ItemCart = ({Producto}) => {
     const {removeProduct} = useCartContext ();

  return (
    <div className='itemCart'>
        <img src={Producto.image} alt={Producto.product}/>
        <div>
         <p>Titulo:{Producto.product}</p>
         <p>Cantidad: {Producto.cantidad}</p>
         <p>Precio: {Producto.price}</p>
         <p>Subtotal: ${Producto.cantidad * Producto.price}</p>
         <button onClick={()=> removeProduct(Producto.id)} >Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart
