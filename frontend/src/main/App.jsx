import './app.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Home from '../components/home/Home';

export default prop =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>

    </BrowserRouter>