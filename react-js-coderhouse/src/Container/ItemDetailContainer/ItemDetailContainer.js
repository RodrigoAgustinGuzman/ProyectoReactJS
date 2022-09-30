import React, {useEffect, useState} from 'react'
import { customFetch } from '../../utils/customsfetch'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Item from '../../components/header/Item'

const ItemDetailContainer = () => {
  const [listaProductos, setlistaProductos] = useState ({})
  useEffect (()=>{
    customFetch(2).then (res =>setlistaProductos (res));
  }, [])
  
    return (
      <ItemDetail Producto = {listaProductos}/>
    )
  }


export default ItemDetailContainer
