import React from "react";
import NavBar from "./components/header/navbar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";

const mensaje = "Bienvenidos a nuestra pagina "


const App = () =>{
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={mensaje} />
    </>
  )
}

export default App;
