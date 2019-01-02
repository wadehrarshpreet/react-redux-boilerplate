import "whatwg-fetch";
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import AppLayout from "./layouts/AppLayout";
import reducers from "./reducers";
import thunk from "redux-thunk";

let initialState = {};
const store = createStore(reducers, initialState, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppLayout />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
