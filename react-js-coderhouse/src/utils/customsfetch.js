import {Productos} from "../assests/productos";

export const customFetch = (Productos, id, categoria) => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            try {
            if (Productos) { 
                if (categoria){
                    const productos = Productos.filter((producto)=>producto.categoria === categoria);
                    resolve (productos);
                }
            if (id){ 
                const Producto = Productos.find((Producto) => Producto.id === parseInt(id)); 
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