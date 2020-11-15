import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import FirstScreen from './screens/FirstScreen';
import SearchAndFind from './screens/SearchAndFind';
import WaitingLocator from './screens/WaitingLocator';
import CarResultsScreen from './screens/CarResultsScreen'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={FirstScreen}/>
                <Route path="/waitingLocator" component={WaitingLocator}/>
                <Route path="/search" exact component={SearchAndFind}/>
                <Route path="/results" exact component={CarResultsScreen}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
