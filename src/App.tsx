import React from 'react';
import './App.css';
import MainPage from "./pages/main-page";
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from "./pages/404";

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
