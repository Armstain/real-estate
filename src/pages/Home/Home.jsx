import React from 'react';
import Navbar from '../Shared/Navbar/Navbar.jsx';
import Banner from '../../Components/Banner/Banner.jsx';
import Cards from '../../Components/Cards/Cards.jsx';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Cards></Cards>
        </div>
    );
};

export default Home;