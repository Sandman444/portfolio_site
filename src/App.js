import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import FrontPage from './components/FrontPage';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
