import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Maker from './pages/Maker'

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Maker} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
