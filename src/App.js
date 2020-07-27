import React from 'react';
import Home from './screens/home';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <div className="App">
              <Home />
            </div>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
