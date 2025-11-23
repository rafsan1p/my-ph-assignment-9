import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            Root
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;