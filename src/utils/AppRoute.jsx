import React, { useCallback } from "react";
import { Route } from "react-router-dom";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
	Layout = Layout === undefined ? (props) => props.children : Layout;

	const renderer = useCallback(
		(props) => (
			<Layout>
				<Component {...props} />
			</Layout>
		),
		[Layout, Component],
	);

	return <Route {...rest} render={renderer} />;
};

export default AppRoute;
