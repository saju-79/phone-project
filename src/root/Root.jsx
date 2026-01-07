import React from 'react';
import Navber from '../componet/navber/Navber';
import Footer from '../componet/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Root;