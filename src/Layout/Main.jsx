import React from 'react';
import Header from '../Share/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import { Container } from 'postcss';

const Main = () => {
    return (
        <div>
            <Header></Header>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;