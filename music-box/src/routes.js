import React from 'react';
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import Inicial from './pages/Inicial';
import MinhasMusicas from './pages/MinhasMusicas';

function Routes(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Inicial}/>
                <Route exact path="/minhas-musicas" component={MinhasMusicas}/>
            </Switch>
        </Router>
    );
}

export default Routes;