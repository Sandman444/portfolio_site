import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import PortfolioProjects from './components/PortfolioProjects';
import FrontPage from './components/FrontPage';
import ContactPage from './components/ContactPage';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path="/" component={FrontPage} />
      <Route path="/about" component={FrontPage} />
      <Route path="/portfolio" component={PortfolioProjects} />
      <Route path="/contact" component={ContactPage} />
    </App>
  </BrowserRouter>,
  document.querySelector('#root')
);
