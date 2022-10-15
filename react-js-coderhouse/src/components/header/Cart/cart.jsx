import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {

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
      {cart.map(Producto => <ItemCart key={Producto.id} product={Producto}/>)}
      <p>Total: {totalPrice ()}</p>
    </div>
  )
}

export default Cart
