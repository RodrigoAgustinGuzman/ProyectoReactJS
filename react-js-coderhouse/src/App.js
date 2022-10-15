import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/header/navbar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/header/Cart/cart";
import CartProvider from "./context/CartContext";

const mensaje = "Bienvenidos a nuestra pagina "

const App = () =>{
  return (
    <>
    <CartProvider>
    <NavBar/>
    <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/detail' element={<ItemDetailContainer greeting={mensaje} />} />
        <Route path='/cart' element= {<Cart/>} />
    </Routes>
    </CartProvider>
    </>
  )
}

export default App;
