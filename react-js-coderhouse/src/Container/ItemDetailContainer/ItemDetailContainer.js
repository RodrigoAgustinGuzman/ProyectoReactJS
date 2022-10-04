import React, {useEffect, useState} from 'react'
import { customFetch } from '../../utils/customsfetch'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { Productos } from '../../assests/productos'

const ItemDetailContainer = () => {
  const [listaProductos, setlistaProductos] = useState ({})

  useEffect (()=>{
    customFetch().then (res =>setlistaProductos (res));
  }, [])
    return (
      <ItemDetail Producto = {Productos[0]}/>
    )
  }


export default ItemDetailContainer
