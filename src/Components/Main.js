// Components/Main.js
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import List from './List';

const Main = () => (
    <Switch>
        <Route exact path="/List" component={List} />
    </Switch>
)
export default Main;
