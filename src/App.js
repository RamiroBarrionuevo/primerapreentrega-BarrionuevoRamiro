import React from "react";
import Navbar from "./componentes/Navbar";
import {  BrowserRouter as Router} from "react-router-dom";
import {Paginas} from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";
import './index.css'
import { Carrito } from "./componentes/Carrito/index";
import 'boxicons'



function App() {
    return(
        <DataProvider>
        <div className="App">
        <Router>
        <Navbar/>
        <Carrito/>
        <Paginas/>
        
        </Router>
    
        </div>
        </DataProvider>
    );
}
export default App;


