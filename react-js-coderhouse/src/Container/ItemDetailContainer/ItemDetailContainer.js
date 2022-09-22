import React, {useEffect, useState} from 'react'
import { Productos } from '../../assests/productos'
import { customFetch } from '../../utils/customsfetch'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [listaProductos, setListaProductos] = useState ({})

  useEffect (()=>{
    customFetch(1).then (res =>setListaProductos (res))
      
     }, [])
    
    return (
      <>
      <ItemDetail producto = {Productos}/>
      </>
    
    )
  }


export default ItemDetailContainer
