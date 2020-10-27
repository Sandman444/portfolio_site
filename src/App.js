import React from 'react';

import PortfolioNav from './components/PortfolioNav';
import './App.css';

const App = ({ children }) => {
  return (
    <div>
      <PortfolioNav />
      {children}
    </div>
  );
};

export default App;
