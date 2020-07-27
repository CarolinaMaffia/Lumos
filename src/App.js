import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes.js';


const App = () => {
  return (
    <Router>
        <div className="App">
            <Routes />
        </div>
    </Router>
  );
}

export default App;
