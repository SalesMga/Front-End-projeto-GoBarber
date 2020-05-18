import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Signin from '../pages/Signin';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Signin}/>
            <Route path="/register"  component={SignUp}/>

            <Route path="/dashboard"  component={Dashboard}/>
            <Route path="/profile"  component={Profile}/>
        </Switch>
    );
}
