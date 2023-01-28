import React from "react";
import Navbar from "./componentes/Navbar";
import {  BrowserRouter as Router} from "react-router-dom";
import {Paginas} from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";
import './index.css'



function App() {
    return(
        <DataProvider>
        <div className="App">
        <Router>
        <Navbar/>
        <Paginas/>
        
        </Router>
    
        </div>
        </DataProvider>
    );
}
export default App;


