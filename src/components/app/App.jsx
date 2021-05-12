import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AvatarsContainer from '../../containers/AvatarsContainers';
import DetailsContainer from '../../containers/DetailsContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AvatarsContainer} />
        <Route
          path="/api/v1/characters/:id"
          exact
          component={DetailsContainer}
        />
      </Switch>
    </Router>
  );
}
