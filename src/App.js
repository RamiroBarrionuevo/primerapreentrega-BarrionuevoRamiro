import React from "react";
import Navbar from "./componentes/Navbar";
import {  BrowserRouter as Router} from "react-router-dom";
import {Paginas} from "./componentes/Paginas";

import './index.css'



function App() {
    return(
        <>
        <div className="App">
        <Router>
        <Navbar/>
        <Paginas/>
        
        </Router>
    
        </div>
        </>
        

    )
}
export default App;


