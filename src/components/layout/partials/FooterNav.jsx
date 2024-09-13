import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const propTypes = {
	className: PropTypes.string,
};

/**
 * @description Footer navigation component
 * @param {object} props
 */
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
