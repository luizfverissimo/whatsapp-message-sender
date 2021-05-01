import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Message from './pages/Message';
import ConfigurationPage from './pages/ConfigurationPage';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/message' component={Message}/>
        <Route exact path='/config' component={ConfigurationPage}/>
      </Switch>
    </Router>
  );
}

export default Routes;
