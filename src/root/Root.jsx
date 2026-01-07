import React from 'react';
import Navber from '../componet/navber/Navber';
import Footer from '../componet/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
        <div className=" "> <Navber></Navber></div>
        <div className="  min-h-[calc(100vh-120px)] ">
            <div className=" w-11/12 mx-auto p-4 md:p-8 lg:p-12">
            <Outlet> </Outlet>

            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Root;