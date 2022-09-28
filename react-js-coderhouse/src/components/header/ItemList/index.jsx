import React from 'react'
import { Productos } from '../../../assests/productos'
import Item from '../Item'

const ItemList = ({listaProductos}) => {
console.log(listaProductos)
  return (
    <>
     {listaProductos.map((prod, i) => <Item key= {`${prod.product} - ${i}`} producto = {prod}/>)}
    </>
  )
}

export default ItemList
