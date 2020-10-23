import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import BaseLayout from '../layouts/Base';

const RouteWrapper = ({
    component: Component,
    isPrivate,
    ...rest
}) => {

    let Layout = BaseLayout;

    return (
        <Route 
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );  
};

export default RouteWrapper;

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
