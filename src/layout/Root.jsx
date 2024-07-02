import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar.jsx';
import Footer from '../Components/Footer/Footer.jsx';

const Root = () => {
    return (
        <div>
            <div className='font-lato'>
                <Navbar></Navbar>
                <div className='container mx-auto'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>

            </div>
        </div>
    );
};

export default Root;