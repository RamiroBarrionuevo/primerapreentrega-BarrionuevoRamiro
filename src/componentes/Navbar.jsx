import React from 'react'
import styled from 'styled-components'
import {CartWidget} from './CartWidget'
import { Link} from "react-router-dom";


function Navbar() {
  return (
    
      <NavContainer>
        <h2><span> Alforno </span></h2>
        <div className='links'>
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/">Contactos</Link>
          <Link to="/"><CartWidget/></Link>
        </div>
      </NavContainer>

    


  )
}
export default Navbar

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 300;
    span{
      font-weight: bold;
    }
  }
  padding : .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  .links{
    a{
      color: white;
      text-decoration: none;
      margin-right: 1rem;
      margin-left:100px
    }
  }

`
