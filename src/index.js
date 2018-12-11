import "whatwg-fetch";
import "babel-polyfill";
import React from 'react';
import ReactDOM from "react-dom";
import {Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import AppLayout from './layouts/AppLayout';
import reducers from './reducers';
import thunk from "redux-thunk";

let initialState = {};
const store = createStore(reducers, initialState, applyMiddleware(thunk));

import createHistory from 'history/createBrowserHistory'

// create history
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
    <Router history={history}>
        <AppLayout/>
    </Router>
</Provider>, document.getElementById("root"));
