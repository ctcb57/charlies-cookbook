import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import HomePage from '../pages/HomePage';
import RecipeDetails from '../pages/RecipeDetails';
import EditRecipe from '../pages/EditRecipe';
import CreateRecipe from '../pages/CreateRecipe';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/create" component={CreateRecipe} />
            <Route exact path="/details/:id" component={RecipeDetails} />
            <Route exact path="/details/:id/edit" component={EditRecipe} />
            <Route component={HomePage} />
        </Switch>
    );
}