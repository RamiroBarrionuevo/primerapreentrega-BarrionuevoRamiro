import React from "react";
import IMG from "../../images/American.jpg";

export const ProductosLista = () => {
    return(
        <>
        <h1 className="title"> productos </h1>
        <div className="productos">
            <a href="#">
            <div className="producto">
                <img src={IMG} alt=""/>
            </div>
            </a>
            <div className="producto__footer">
                <h1>title</h1>
                <p> Categoria</p>
                <p className="price"></p>
            </div>
            <div className="bottom">
                <button>
                
                </button>
                
            </div>
        </div>
        </>


    )
}
