import React, { Fragment } from 'react';
import Header from '../../component/Layout/Header';
import Footer from '../../component/Layout/Footer';
import './Layout.css';

function SiteLayout({ children, ...rest }) {
    return (
        <Fragment>
            <Header />
            <div className={'content'}>{children}</div>
            <Footer />
        </Fragment>
    );
}

export default SiteLayout;
