import React from "react";
import NavBar from "./components/header/navbar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";

const mensaje = "Bienvenidos a nuestra pagina "


const App = () =>{
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={mensaje} />
    <ItemDetailContainer/>
    </>
  )
}

export default App;
