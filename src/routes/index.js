import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import HomePage from '../pages/HomePage';
import RecipeDetails from '../pages/RecipeDetails';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/details/:id" component={RecipeDetails} />
            <Route component={HomePage} />
        </Switch>
    );
}