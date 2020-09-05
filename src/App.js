import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        {
          //common content goes here
        }
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
