import React from "react";
import Home from '../Pages/Home';
import Contacto from '../Pages/Contacto';
import Producto from '../Pages/Producto';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
    const Failed = () => <h1>404</h1>;
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/Contacto" element={<Contacto />}></Route>
                    <Route path="/Producto" element={<Producto />}></Route>
                    <Route path="*" element={<Failed />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Router;