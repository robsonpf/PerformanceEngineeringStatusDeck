import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Cover from './components/Cover';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Cover} />
      </Router>
    </div>
  );
}

export default App;
