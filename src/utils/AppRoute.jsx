import PropTypes from "prop-types";
import { useCallback } from "react";
import { Route } from "react-router-dom";

const propTypes = {
	component: PropTypes.func,
	layout: PropTypes.func,
	children: PropTypes.node,
};

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

AppRoute.propTypes = propTypes;

export default AppRoute;