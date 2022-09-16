import React from 'react'

const Item = ({producto}) => {

  return (
    <div >
      <p>{producto.product}</p>
      <img src={producto.image} alt="camisetas"/> 
      <h3>${producto.price}</h3>
      <button>Ver detalle</button>
    </div>
  )
}

export default Item
