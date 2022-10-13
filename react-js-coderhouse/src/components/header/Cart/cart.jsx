import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const cart = () => {

const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
        <>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Comprar</Link>
        </>
    )
  }

  return (
    <div>
      {cart.map(product => <ItemCart key={Producto.id} product={Producto}/>)}
    </div>
  )
}

export default cart
