import React from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/products/:product_id' element={<CardPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;