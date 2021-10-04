import './App.css';
import Navbar from './components/navbar';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/home';
import Disp from './components/pages/data';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/vera' exact component={Disp} />
      </Switch>
    </Router>
  );
}

export default App;
