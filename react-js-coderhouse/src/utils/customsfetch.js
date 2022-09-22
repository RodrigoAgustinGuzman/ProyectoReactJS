import { Productos } from "../assests/productos";

export const customFetch = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            if (id){ 
                const Producto = Productos.find((producto) => producto.id === id); 
             resolve (Producto); 
        } else {
             resolve (Productos);
        }
        }, 2000);

  });


}