import React, { useState, useContext} from 'react'

const cartContext = React.createContext([])

export const useCartContext = () => useContext(cartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.find(producto => producto.id === id) 

    const addProduct = (Producto, cantidad) => {
        if (isInCart(Producto.id)) {
           const newCart = cart.map(prod => {
            if (prod.id === Producto.id){
               const newCantidad = prod.cantidad + cantidad
               return {...prod, cantidad: newCantidad}
            } else {
                return prod
            }
           })
           setCart(newCart)
        } else {
            const newProduct = {...Producto, cantidad: cantidad}
            setCart([...cart, newProduct])
        }

   }

   const clearCart = () => setCart([]);
   
   const removeProduct = (id) => setCart (cart.filter(producto => producto.id !== id));
   
   const totalPrice = () => {
    return cart.reduce((acc, product) => acc += (product.price * product.cantidad), 0)
   }
   const totalCantidad = () => {
    return cart.reduce((acc, product) => acc += product.cantidad, 0)
   }

  return (
   <cartContext.Provider value={{
    clearCart,
    isInCart,
    removeProduct,
    addProduct,
    totalPrice,
    totalCantidad,
    cart,
   }
   }>
    {children}
   </cartContext.Provider>
  )
}

export default CartProvider
