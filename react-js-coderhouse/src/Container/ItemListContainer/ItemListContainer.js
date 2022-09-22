import React, { useEffect, useState } from 'react'
import ItemList from '../../components/header/ItemList'
import {Productos} from '../../assests/productos'
import {customFetch} from '../../utils/customsfetch'


const ItemListContainer = ({greeting}) => {

  const [listaProductos, setListaProductos] = useState ([])
  const [loading, setLoading] = useState (true)



  useEffect (()=>{
   customFetch(Productos)
       .then(res=> {
        setLoading (false)
        setListaProductos(res)})
    }, [])
    
  return (
    <>
    <h1>{greeting}</h1>
    loading ? 
    <ItemList listaProductos= {listaProductos}/>
    </>
  
  )
}

export default ItemListContainer
