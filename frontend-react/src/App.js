import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Cover from './components/Cover';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Route exact path="/" component={Cover} />
      </Router>
    </div>
  );
}

export default App;
