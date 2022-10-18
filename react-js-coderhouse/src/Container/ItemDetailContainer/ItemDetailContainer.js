import React, {useEffect, useState} from 'react'
import { customFetch } from '../../utils/customsfetch'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { Productos } from '../../assests/productos'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [Producto, setProducto] = useState ({})

  const {id} = useParams ();

  
  useEffect (()=>{
    customFetch(Productos, id).then (res =>setProducto (res));
  }, [id])
    return (
      <ItemDetail Producto = {Producto}/>
    )
  }


export default ItemDetailContainer
