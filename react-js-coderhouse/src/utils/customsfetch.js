import {Productos} from "../assests/productos";

export const customFetch = (Productos, id) => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            try {
            if (Productos) { 
            if (id){ 
                const Producto = Productos.find((Producto) => Producto.id === id); 
             resolve (Producto); 
        } else {
             resolve (Productos);
        }
        } 
        }catch (err) {
        reject(err);
        }
        }, 2000)
  });  
}