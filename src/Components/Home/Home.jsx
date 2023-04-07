import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData()
    return (
        <div>
            <div>This is home {tShirts.length} </div>
        </div>
    );
};

export default Home;