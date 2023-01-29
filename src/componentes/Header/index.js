import { BoxIconElement } from 'boxicons';
import React from 'react';
import forno from "../../images/logo.png";
import '../../index.css'
export const Header = () =>{
  return(
    <header>
      <a href="#">
        <div className="logo">
          <img src={forno} alt="logo" width="50"/>
        </div>
      </a>
      <ul>
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="#">PRODUCTOS</a>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart" ></box-icon>
        <span className="item__total">0</span>
      </div>
    </header>
  )

}