import classNames from "classnames";
import PropTypes from "prop-types";
import Logo from "./partials/Logo";
import Navbar from "./partials/Navbar";

const propTypes = {
	navPosition: PropTypes.string,
	hideNav: PropTypes.bool,
	hideSignin: PropTypes.bool,
	bottomOuterDivider: PropTypes.bool,
	bottomDivider: PropTypes.bool,
	className: PropTypes.string,
};

const defaultProps = {
	navPosition: "",
	hideNav: false,
	hideSignin: false,
	bottomOuterDivider: false,
	bottomDivider: false,
};

/**
 * Header component
 * @param {object} props - Header component props
 * @param {string} props.className - Additional classes
 * @param {string} props.navPosition - Navigation position
 * @param {boolean} props.hideNav - Hide navigation
 * @param {boolean} props.hideSignin - Hide sign in
 * @param {boolean} props.bottomOuterDivider - Bottom outer divider
 * @param {boolean} props.bottomDivider - Bottom divider
 * @returns {import("react").ReactElement} Header component
 */
const Header = ({
	className,
	navPosition,
	hideNav,
	hideSignin,
	bottomOuterDivider,
	bottomDivider,
	...props
}) => {
	const classes = classNames("site-header", bottomOuterDivider && "has-bottom-divider", className);

	return (
		<header {...props} className={classes}>
			<div className="container">
				<div className={classNames("site-header-inner", bottomDivider && "has-bottom-divider")}>
					<Logo />
					{!hideNav && <Navbar navPosition={navPosition} hideSignin={hideSignin} />}
				</div>
			</div>
		</header>
	);
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
