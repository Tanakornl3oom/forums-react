import React from 'react';
import { Route } from 'react-router-dom';
import SiteLayout from './SiteLayout';

const Layout = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={matchProps => (
                <SiteLayout>
                    <Component {...matchProps} />
                </SiteLayout>
            )}
        />
    );
};

export default Layout;
