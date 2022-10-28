import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/header/navbar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/header/Cart/cart";
import CartProvider from "./context/CartContext";
import Form from "./components/header/Form/Form";

const mensaje = "Bienvenidos a nuestra pagina "

const App = () =>{
  return (
    <>
    <CartProvider>
    <NavBar></NavBar>
    <Routes>
        <Route path='/' element={<ItemListContainer greeting={mensaje}  />} />
        <Route path='/category/:IdCategoria' element={<ItemListContainer greeting={mensaje}  />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element= {<Cart/>} />
        <Route path='/form' element= {<Form/>} />
    </Routes>
    </CartProvider>
    </>
  )
}

export default App;
