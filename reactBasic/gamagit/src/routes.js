import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './Repositories/Repositories'
import Home from "./Home";

export default function RoutesMap() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={ <Home/> }/>    
            <Route path='/repositories' element={ <Repositories/> }/>    
        </Routes>
    </BrowserRouter>
    )
}