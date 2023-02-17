import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";
import '../../index.css'

export const ProductoDetalles = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;
    const [detalle, setDetalle] = useState([])
    const params = useParams();
    let item = 0
    useEffect(() => {
        productos.forEach(producto => {
            item = 0
            if (producto.id === parseInt(params.id)) {
                setDetalle(producto)
            }
        });
    }, [params.id, productos])




    return (
        <>
            {
                <div className="detalles">
                    <h2>{detalle.title}</h2>
                    <p className="price">${detalle.price}</p>
                    <button onClick={()=>addCarrito(detalle.id)}> Añadir al carrito</button>
                    <img src={detalle.image} alt={detalle.title} />
                    <input type="range" min="1" max="36" />
                    <div className="description">
                        <p><b>Descripcion</b>Loremsfafajfjfajfjajfajfjiafiafnaifjniafnianfiaifnainfianfianfinafinaifnifn</p>
                    </div>
                </div>
            }


            <h2 className="relacionados">Productos Relacionados</h2>
            <div className="productos">
                {productos.map((productos) =>{
                    if((item < 6)&&(detalle.category === productos.category)){
                        item++;
                        return <ProductoItem
                        key={productos.id}
                        id={productos.id}
                        title={productos.title}
                        price={productos.price}
                        image={productos.image}
                        category={productos.category}
                        cantidad={productos.cantidad}
                    />
                    }
                }

                )}
            </div>
        </>


    )
}