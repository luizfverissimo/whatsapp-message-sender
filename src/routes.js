import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Message from './pages/Message';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/message' component={Message}/>
      </Switch>
    </Router>
  );
}

export default Routes;
