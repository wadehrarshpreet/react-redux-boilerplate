import 'babel-polyfill'; //for old browser compatible
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import {Provider} from 'react-redux';
import AppLayout from './Component/AppLayout';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import createBrowserHistory from 'history/createBrowserHistory'
import Reducers from './Reducers/index.js';

const newHistory = createBrowserHistory();
const store = createStore(Reducers, applyMiddleware(promise));

import { createHashHistory } from 'history'

// create history
const history = createHashHistory({
  basname: '',
  hashType: 'slash'
});


ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => <AppLayout active="home"><Home /></AppLayout>}/>
      <Route exact path="/about" render={() => <AppLayout active="about"><About /></AppLayout>}/>
      <Route exact path="/contact" render={() => <AppLayout active="contact"><Contact /></AppLayout>}/>
    </Switch>
  </Router>
</Provider>, document.getElementById("root"));
