const ItemDetail = ({Producto}) => {
  return (
    <div>
          <p>{Producto.product}</p>
          <img src={Producto.image} alt="camisetas"/> 
          <p>{Producto.description}</p>
          <p>${Producto.price}</p>
          <button>Ver detalle</button>
      </div>
        
      )
}

export default ItemDetail 