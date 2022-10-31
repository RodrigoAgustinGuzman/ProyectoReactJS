import React from 'react'
import { Link } from 'react-router-dom';
import '../Cart/cart.css'
import { useCartContext } from '../../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {

const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
        <div className='cartVacio'>
        <p>NO HAY ELEMENTOS EN EL CARRITO</p>
        <p><Link to='/'>Seguir comprando</Link></p>
        </div>
    )
  }

  return (
    <div>
      {cart.map(Producto => <ItemCart key={Producto.id} product={Producto}/>)}
      <div className='totalPrice' >
      <p>TOTAL: {totalPrice ()}</p>
      <button onClick={() => clearCart()}>VACIAR CARRITO</button>
            <Link to="/form"><button>PAGAR</button></Link>
            </div> 
    </div>
  )
}

export default Cart
