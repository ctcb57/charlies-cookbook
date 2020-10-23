import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import HomePage from '../pages/HomePage';

export default function Routes() {
    return (
        <Switch>
            <Route component={HomePage} />
        </Switch>
    );
}