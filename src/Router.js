import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Detector from './components/Detector';

const AppRouter = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/:phrase' component={Detector}/>
    </Switch>
  );
}

export default AppRouter;