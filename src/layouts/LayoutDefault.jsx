import PropTypes from "prop-types";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const propTypes = {
	children: PropTypes.node,
};

/**
 * Default layout component
 * @param {object} props - LayoutDefault component props
 * @param {import("react").ReactNode} props.children - Children
 * @returns {import("react").ReactNode} - LayoutDefault component
 */
const LayoutDefault = ({ children }) => (
	<>
		<Header navPosition="right" className="reveal-from-bottom" />
		<main className="site-content">{children}</main>
		{/* <Banner /> */}
		<Footer />
	</>
);

LayoutDefault.propTypes = propTypes;

export default LayoutDefault;
