import React from 'react';
import Header from '../Share/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import { Container } from 'postcss';

const Main = () => {

    const container = new Container();
    
    return (
        <container>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </container>
    );
};

export default Main;