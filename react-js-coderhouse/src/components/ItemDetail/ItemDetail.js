import { ItemCount } from "../header/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";



const ItemDetail = ({Producto}) => {

const [goToCart, setGoToCart] = useState (false);

const onAdd = (cantidad) => {
          setGoToCart(true);
  }

  return (
    <div>
          <Link to="/">
           <button>Volver</button>
          </Link>
          <p>{Producto.product}</p>
          <img src={Producto.image} alt="camisetas"/> 
          <p>{Producto.description}</p>
          <p>${Producto.price}</p>
          {
            goToCart 
            ? <Link to="/cart" > Terminar la compra </Link>
            : <ItemCount initial={1} stock={Producto.stock} onAdd={onAdd}/>
        
          }
      </div>
      )
}

export default ItemDetail 