import React from 'react'
import { useCartContext } from '../../../context/CartContext'
import carrito from "../../../imagenes/carrito.png"

const CartWidget = () => {
  const {totalCantidad} = useCartContext ();
  return (
    <>
    <img src={carrito}  alt="carrito"/>
    <span>{totalCantidad() || ''}</span>
    </>
  )
}

export default CartWidget
