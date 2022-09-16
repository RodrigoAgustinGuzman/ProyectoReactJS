import React from 'react'
import { Productos } from '../../../assests/productos'
import Item from '../Item'

const ItemList = ({listaProductos}) => {

  return (
    <div>
     {listaProductos.map((prod, i) => <Item key= {`${prod.product} - ${i}`} producto = {prod}/>)}
    </div>
  )
}

export default ItemList
