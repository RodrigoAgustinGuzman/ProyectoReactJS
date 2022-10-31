import { ItemCount } from "../header/ItemCount";
import { useCartContext } from "../../context/CartContext";
import '../ItemDetail/ItemDetail.css'
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
    <div  className="cardDetail" >
          <p>{Producto.product}</p>
          <img src={Producto.image} alt="camisetas"/> 
          <p>{Producto.description}</p>
          <p>${Producto.price}</p>
          {
            goToCart 
            ? <Link to="/cart" > <Button> Terminar la compra </Button> </Link>
            : <ItemCount initial={1} stock={Producto.stock} onAdd={onAdd}/>
        
          }
          <Link to="/">
           <button>Volver</button>
          </Link>
      </div>
      )
}

export default ItemDetail 