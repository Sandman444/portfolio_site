import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PortfolioNav from './components/PortfolioNav';
import PortfolioProjects from './components/PortfolioProjects';
import FrontPage from './components/FrontPage';
import './App.css';

const App = () => {
  return (
    <div>
      <PortfolioNav />
      <Router>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/portfolio" component={PortfolioProjects} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
