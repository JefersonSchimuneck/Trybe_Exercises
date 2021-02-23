import React from 'react';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './store/index';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisteredCustomers from './pages/RegisteredCustomers';

import './App.css';

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/login" component={ Login }/>
          <Route path="/register" component={ Register }/>
          <Route path="/registered-customers" component={ RegisteredCustomers }/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
