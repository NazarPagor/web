import React from 'react';
import './App.css';
import MainPage from "./pages/main-page";
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from "./pages/404";
import ContactUs from "./pages/ContactUs";
import TermOfUse from "./pages/TermOfUse";
import Faq from "./pages/FAQ";


function App() {
    return (
        <div className="container">
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="/contacts" element={<ContactUs/>}/>
                <Route path="/terms_use" element={<TermOfUse/>}/>
                <Route path="/faq" element={<Faq/>}/>
            </Routes>
        </div>
    );
}

export default App;
