import { ItemCount } from "../header/ItemCount";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";



const ItemDetail = ({Producto}) => {

const [goToCart, setGoToCart] = useState (false);
const { addProduct, cart } = useCartContext();

const onAdd = (cantidad,) => {
          setGoToCart(true);
          addProduct(Producto, cantidad);
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
            ? <Link to="/cart" > <Button> Terminar la compra </Button> </Link>
            : <ItemCount initial={1} stock={Producto.stock} onAdd={onAdd}/>
        
          }
      </div>
      )
}

export default ItemDetail 