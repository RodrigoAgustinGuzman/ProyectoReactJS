import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = ({ categorias }) => {
    return (
        <nav>
            {categorias.map((categorias) => {
                return <NavLink key={categorias.id} to={categorias.route} style={styles.links}>{categorias.title}</NavLink>
            })}
        </nav>
    )
}

const styles = {
    links: {
        padding: 10,
    }
}