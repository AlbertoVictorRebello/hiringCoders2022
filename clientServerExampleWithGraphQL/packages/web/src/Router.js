import React from 'react';
import {
    Routes, Route, BrowserRouter
} from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';


export default function Router() {
    return (
        // <BrowserRouter>
            <Routes>
                <Route exact path='/'  element={ <Home/> }/>    
                <Route path='/sign-in' element={ <Signin/> }/>    
            </Routes>
        // </BrowserRouter>
    )

}