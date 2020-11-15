import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import FirstScreen from './screens/FirstScreen';
import LocatorFlow from './screens/LocatorFlow';
import WaitingLocatorScreen from './screens/WaitingLocator';
import Forms from './components/Forms';
import OwnerRegister from './screens/OwnerRegister';
import WaitingOwner from './screens/WaitingOwner';
import OwnerFlow from './screens/OwnerFlow';
import Login from './screens/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={FirstScreen}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/waitingLocator" component={WaitingLocatorScreen}/>
                <Route path="/locator" exact component={LocatorFlow}/>
                <Route path="/forms" exact component={Forms}/>
                <Route path="/register" exact component={OwnerRegister}/>
                <Route path="/waitingOwner" exact component={WaitingOwner}/>
                <Route path="/owner" exact component={OwnerFlow}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
