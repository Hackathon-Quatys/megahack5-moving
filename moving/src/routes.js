import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import FirstScreen from './screens/FirstScreen';
import SearchAndFind from './screens/SearchAndFind';
import WaitingLocatorScreen from './screens/WaitingLocator';
import Forms from './components/Forms';
import OwnerRegister from './screens/OwnerRegister';
import './style/ownerRegister.css'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={FirstScreen}/>
                <Route path="/waitingLocator" component={WaitingLocatorScreen}/>
                <Route path="/search" exact component={SearchAndFind}/>
                <Route path="/forms" exact component={Forms}/>
                <Route path="/register" exact component={OwnerRegister}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
