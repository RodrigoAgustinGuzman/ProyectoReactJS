const ItemDetail = ({Producto}) => {
  return (
    <div>
          <p>{Producto.id}</p>
          <img src={Producto.image} alt="camisetas"/> 
          <h3>${Producto.price}</h3>
          <button>Ver detalle</button>
        </div>
      )
}

export default ItemDetail 