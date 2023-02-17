import 'boxicons';
import React, {useContext} from 'react';
import forno from "../../images/logo.png";
import { DataContext } from "../../context/Dataprovider";
import '../../index.css'



export const Header = () =>{

  const value= useContext(DataContext);
  const [menu,setMenu] = value.menu;
  const [carrito] = value.carrito;
  

  const toogleMenu = () =>{
    setMenu(!menu)
  }
  return(
    <header>
      <a href="#">
        <div className="logo">
          <img src={forno} alt="logo" width="50"/>
        </div>
      </a>
      <ul>
        <li>
          <a href="/inicio">INICIO</a>
        </li>
        <li>
          <a href="/productos">PRODUCTOS</a>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart" ></box-icon>
        <span className="item__total">{carrito.length}</span>
      </div>
    </header>
  )

}