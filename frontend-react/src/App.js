import React from 'react';
import { Route, } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cover from './components/Cover';
import Slide from './components/Slide';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const App = (props) => {
  return (
    <div className="App">
      <NavBar history={props.history}/>
      <Route exact path="/" component={Cover} />
      <Route path="/slide/:page" component={Slide} />
    </div>
  );
}

export default App;
