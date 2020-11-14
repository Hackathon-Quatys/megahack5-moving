import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import FirstScreen from './screens/FirstScreen';
import SearchScreen from './screens/SearchScreen';
import WaitingLocator from './screens/WaitingLocator';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={FirstScreen}/>
                <Route path="/waitingLocator" component={WaitingLocator}/>
                <Route path="/search" exact component={SearchScreen}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
