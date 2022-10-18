import React, {useEffect, useState} from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {db} from '../../Firebase/Config'
import{ collection, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [Producto, setProducto] = useState ({})
  const {id} = useParams ();

  useEffect (()=>{
    const productCollection = collection(db, "productos")
    const refDoc = doc(productCollection, id)
    getDoc(refDoc)
    .then((result) => {
        setProducto({
                id: result.id,
                ...result.data()
            })
    })
    .catch(() => {
        console.log("No responde la API")
        console.error("No responde la API")
    })
}, [id])
   
    return (
      <ItemDetail Producto = {Producto}/>
    )
  }


export default ItemDetailContainer
