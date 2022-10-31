import React from 'react'
import { useState } from 'react'
import '../Form/Form.css'
import { collection, addDoc, serverTimestamp, } from "firebase/firestore";
import swal from "sweetalert"
import { useCartContext } from '../../../context/CartContext';
import { db } from '../../../Firebase/Config';


const Form = () => {
    const { cart, clearCart, totalPrice } = useCartContext();

    const [data, setData] = useState({
        Name: "",
        LastName: "",
        Direcction: "",
        nameCard: "",
        numberCard: "",
        dateCart: "",
        cvvCard: "",
      });
    
      const DataUser = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value,
        });
      };
      
      const buy = () => {
        console.log(data);
        console.log(totalPrice);
    
        
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
          comprador: data,
          item: cart,
          date: serverTimestamp(),
          total: totalPrice ()
        })
          .then((result) => {
            console.log(result);
            swal({
              title: "Gracias por tu compra !",
              text: "tu id de compra es:" + result.id,
            });
            clearCart();    
          })
          .catch((e) => {
            console.log(e);
          });
      };
        return (
            <>
            <form className='formulario'>
                <label
                  className="labelForm">
                  Nombre
                </label>
              <div className="inputForm">
                <input
                  type="text"
                  name = "Name"
                  className=""
                  placeholder=" "
                  required=""
                  onChange={DataUser}
                />
              </div>
                <label
                  className="labelForm">
                  Apellido
                </label>
              <div className="inputForm">
                <input
                  type="text"
                  name="LastName"
                  className=""
                  placeholder=""
                  required=""
                  onChange={DataUser}
                />
              </div>
                <label
                 className="labelForm">
                  Direccion
                </label>
              <div className="inputForm">
                <input
                  type="text"
                  name="Direcction"
                  className=""
                  placeholder=""
                  required=""
                  onChange={DataUser}
                />
              </div>
              <div className="">
                  <label
                    className="labelForm">
                    Nombre de la tarjeta
                  </label>
                <div className="inputForm">
                  <input
                    type="text"
                    name="nameCard"
                    className=""
                    placeholder=""
                    required=""
                    onChange={DataUser}
                  />
                </div>
                  <label
                    className="labelForm">
                    Numero de tarjeta{" "}
                  </label>
                <div className="inputForm">
                  <input
                    type="number"
                    name="numberCard"
                    className=""
                    placeholder=" "
                    required=""
                    onChange={DataUser}
                  />
                </div>
              </div>
                  <label
                    className="labelForm">
                    Fecha de vencimiento de la tarjeta{" "}
                  </label>
              <div className="">
                <div className="inputForm">
                  <input
                    type="number"
                    name="dateCart"
                    className=""
                    placeholder=" "
                    required=""
                    onChange={DataUser}
                  />
                </div>
                  <label
                    className="labelForm">
                    CVV de la tarjeta
                  </label>
                <div className="inputForm">
                  <input
                    type="number"
                    name="cvvCard"
                    className=""
                    placeholder=""
                    required=""
                    onChange={DataUser}
                  />
                </div>
              </div>
              <button
                type="button"
                className=" "
                onClick={buy}>
                Finalizar compra
              </button>
            </form>
          </>
        )
}
    export default Form