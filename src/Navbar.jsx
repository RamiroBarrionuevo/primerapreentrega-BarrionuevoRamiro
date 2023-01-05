import React from 'react'
import styled from 'styled-components'


function Navbar() {
  return (
    <>
      <NavContainer>
        <h2><span> Alforno </span></h2>
        <div className='links'>
          <a href="/">Inicio</a>
          <a href="/">Productos</a>
          <a href="/">Contactos</a>
          <a href="/">Carrito</a>
        </div>
      </NavContainer>

    </>


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
