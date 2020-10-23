import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RouteWrapper = ({
    component: Component,
    ...rest
}) => {

    let Layout;

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

