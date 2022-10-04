import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/header/navbar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";

const mensaje = "Bienvenidos a nuestra pagina "


const App = () =>{
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/detail' element={<ItemDetailContainer greeting={mensaje} />} />
    </Routes>
    </>
  )
}

export default App;
