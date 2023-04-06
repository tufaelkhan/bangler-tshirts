import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <h2>this is our main layout!!</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;