import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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