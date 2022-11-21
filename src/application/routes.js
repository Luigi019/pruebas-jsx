import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../Pages/Home';
import Contacto from '../Pages/Contacto';
import Producto from '../Pages/Producto';

const WebRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' component={Home} />
            <Route path='/contacto' component={Contacto} />
            <Route path='/producto' component={Producto} />
            <Route path='*' component={() => <div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default WebRoutes;