import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home'
import News from './pages/News'


export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                
            </Switch>
        </Router>
    )
}