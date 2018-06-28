import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from '../App';
import RecipeDetails from './RecipeDetails'
const RouteFile=()=>(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact></Route>
            <Route path="/recipe-details/:id" component={RecipeDetails}></Route>
        </Switch>
    </BrowserRouter>
)
export default RouteFile;