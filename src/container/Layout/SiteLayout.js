import React, { Fragment } from 'react';
import Header from '../../component/Layout/Header';
import Footer from '../../component/Layout/Footer';

function SiteLayout({ children, ...rest }) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
}

export default SiteLayout;
