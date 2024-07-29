import { createBrowserHistory } from "history";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

//import './App.css';
import "./assets/scss/style.scss";

const history = createBrowserHistory();

const rootElement = document.getElementById("root");

render(
	<Router history={history}>
		<App />
	</Router>,
	rootElement
);
