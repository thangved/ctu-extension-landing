import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Docs from "./views/Docs";
import Privacy from "./views/Privacy";

ReactGA.initialize(import.meta.env.VITE_APP_GA_CODE);

const trackPage = (page) => {
	ReactGA.set({ page });
	ReactGA.pageview(page);
};

const children = () => (
	<Switch>
		<AppRoute exact path="/" component={Home} layout={LayoutDefault} />
		<AppRoute exact path="/docs" component={Docs} layout={LayoutDefault} />
		<AppRoute exact path="/privacy" component={Privacy} layout={LayoutDefault} />
	</Switch>
);

const App = () => {
	const childRef = useRef();
	let location = useLocation();

	useEffect(() => {
		const page = location.pathname;
		document.body.classList.add("is-loaded");
		childRef.current.init();
		trackPage(page);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return <ScrollReveal ref={childRef} children={children} />;
};

export default App;
