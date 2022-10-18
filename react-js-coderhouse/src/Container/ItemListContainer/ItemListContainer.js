import React, { useEffect, useState } from 'react'
import ItemList from '../../components/header/ItemList'
import {Productos} from '../../assests/productos'
import {customFetch} from '../../utils/customsfetch'
import { CircularProgress } from "@mui/material";
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {

  const [listaProductos, setListaProductos] = useState ([])
  const [loading, setLoading] = useState (true)
  
  const { categoria } = useParams();

  useEffect (()=>{
   customFetch(Productos, '', categoria)
       .then(res=> {
        setLoading (false)
        setListaProductos(res)})
    }, [categoria])
  
  return (
    <>
    <h1>{greeting}</h1>
    loading ? 
    <ItemList listaProductos= {listaProductos}/>
    </>
  
  )
}

export default ItemListContainer
