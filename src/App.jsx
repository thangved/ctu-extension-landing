import { useEffect, useRef } from "react";
import ReactGA from "react-ga";
import { Switch, useLocation } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Docs from "./views/Docs";
import Home from "./views/Home";
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
	}, [location]);

	return <ScrollReveal ref={childRef}>{children}</ScrollReveal>;
};

export default App;
