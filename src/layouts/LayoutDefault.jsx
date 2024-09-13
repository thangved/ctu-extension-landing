import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import PropTypes from "prop-types";

const propTypes = {
	children: PropTypes.node,
};

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
