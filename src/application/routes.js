import React from "react";
import Home from '../Pages/Home';
import Contacto from '../Pages/Contacto';
import Contacto2 from '../Pages/Contacto2';
import HomeProvider from '../Pages/HomeProvider';
import Crud from '../Pages/Crud';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
    const Failed = () => <h1>404</h1>;
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/Contacto" element={<Contacto />}></Route>
                    <Route path="/Contacto2" element={<Contacto2 />}></Route>
                    <Route path="/Crud" element={<Crud />}></Route>
                    <Route path="/home2" element={<HomeProvider />}></Route>
                    <Route path="*" element={<Failed />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Router;