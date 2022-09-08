import React from 'react'
import logo from "../../imagenes/store.png"
import "./navbar.css"
import CartWidget from './CartWidget/CartWidget'

const navbar = () => {
  return (
    <header>
    <img src={logo} alt='logo'/>
    <h1>R Store</h1>
    <nav>
        <a href='#h'>Home</a>
        <a href='#h'>Productos</a>
        <a href='#h'>Nosotros</a>
     </nav>
     <div className='carrito' >
     <CartWidget/>
     </div>
    </header>
  )
}

export default navbar