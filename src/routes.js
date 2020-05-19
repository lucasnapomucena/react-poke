import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import Details from './pages/Details/index';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details/:person" component={Details} />
    </Switch>
  );
}
