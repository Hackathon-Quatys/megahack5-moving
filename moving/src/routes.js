import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import FirstScreen from './screens/FirstScreen';
import WaitingLocator from './screens/WaitingLocator';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={FirstScreen}/>
                <Route path="/waitingLocator" component={WaitingLocator}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
