import React, { useContext } from 'react'
import Card from "../../images/American.jpg";
import 'boxicons'
import { DataContext } from "../../context/Dataprovider";
import '../../index.css';




export const Carrito = () => {
    const value = useContext(DataContext)
    const[menu, setMenu] = value.menu

    const tooglefalse= () =>{
        setMenu(false)
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";





    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito__center">
                    <div className="carrito__item">
                        <img src={Card} alt=""/>
                        <div>
                            <h3>American</h3>
                            <p className="price">$345</p>
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid"></box-icon>
                            <p className="cantidad">1</p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                        </div>
                        <div className="remove__item">
                            <box-icon name="trash"></box-icon>
                        </div>
                    </div>
                    <div className="carrito__item">
                        <img src={Card} alt=""/>
                        <div>
                            <h3>American</h3>
                            <p className="price">$345</p>
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid"></box-icon>
                            <p className="cantidad">1</p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                        </div>
                        <div className="remove__item">
                            <box-icon name="trash"></box-icon>
                        </div>
                    </div>
                    <div className="carrito__item">
                        <img src={Card} alt=""/>
                        <div>
                            <h3>American</h3>
                            <p className="price">$345</p>
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid"></box-icon>
                            <p className="cantidad">1</p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                        </div>
                        <div className="remove__item">
                            <box-icon name="trash"></box-icon>
                        </div>
                    </div>
                </div>
                <div className="carrito__footer">
                    <h3>Total : $2345</h3>
                    <button className="btn">Payment</button>
                </div>
            </div>
        </div>

    )
}