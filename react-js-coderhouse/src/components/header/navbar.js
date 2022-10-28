import React from 'react'
import logo from "../../imagenes/store.png"
import { Nav } from './nav'
import './navbar.css'
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const navbar = ({name}) => {
  const categories = [
    { id: 0, title: "Hot Sale", route: "/category/hotsale" },
    { id: 1, title: "Temporada 21/22", route: "/category/temp22" },
    { id: 2, title: "Temporada 22/23", route: "/category/temp23"}, 
    { id: 3, title: "Retro", route: "/category/retro" },
  ];

  return (
    <header style={styles.container}>
    <div style={styles.branchContainer}>
      <Link to="/">
        <img style={styles.imagen} src={logo} alt="logo" />
      </Link>
      <h1>Store {name}</h1>
    </div>
    <div style={styles.links}>
      <Nav categorias={categories}/>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  </header>

);
};

const styles = {
container: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
},
branchContainer: {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
},

links: {
  padding: 5,
  listStyle: 'none',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: 14,
  color: '#0f0f0f',
},

imagen: {
  width: "30%",
},
};

export default navbar;
 