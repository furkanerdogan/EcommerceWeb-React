import React from 'react';
import { Header, Footer } from '../component/CommonIndex';

import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="content-holder">
                <aside className="content">
                    {children}
                </aside>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;