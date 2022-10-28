import React, { useEffect, useState } from 'react'
import ItemList from '../../components/header/ItemList'
import{ query, where, collection, getDocs } from 'firebase/firestore'
import {db} from '../../Firebase/Config'
import { CircularProgress } from "@mui/material";
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {

  const [listaProductos, setListaProductos] = useState ([])
  const [loading, setLoading] = useState (true)
  
  const { IdCategoria } = useParams();

  useEffect (()=>{
    const productsCollection = collection(db, 'productos'); //se crea la coleccion
        const q = query(productsCollection, where('categoria', '==', IdCategoria || null));

        getDocs(IdCategoria ? q : productsCollection)
            .then((data) => {
                const list = data.docs.map((product) => {
                    return {
                        ...product.data(),
                        id: product.id
                    }
                })
                setListaProductos(list);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [IdCategoria])
  
  return (
    <>
    <h1>{greeting}</h1>
    loading ? 
    <ItemList listaProductos= {listaProductos}/>
    </>
  
  )
}

export default ItemListContainer
