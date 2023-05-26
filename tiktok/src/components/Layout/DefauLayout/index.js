import Header from './Header';
import Sibebar from './Sibebar';

import React from 'react';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Sibebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
