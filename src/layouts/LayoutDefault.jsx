import PropTypes from "prop-types";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const propTypes = {
	children: PropTypes.node,
};

/**
 * Default layout
 * @param {object*} props
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
