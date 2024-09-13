import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
	className: PropTypes.string,
};

const FooterNav = ({ className, ...props }) => {
	const classes = classNames("footer-nav", className);

	return (
		<nav {...props} className={classes}>
			<ul className="list-reset">
				<li>
					<Link to="/privacy">Quyền riêng tư</Link>
				</li>
			</ul>
		</nav>
	);
};

FooterNav.propTypes = propTypes;
export default FooterNav;
