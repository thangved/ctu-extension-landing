import classNames from "classnames";
import PropTypes from "prop-types";
import FooterCopyright from "./partials/FooterCopyright";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";
import Logo from "./partials/Logo";

const propTypes = {
	topOuterDivider: PropTypes.bool,
	topDivider: PropTypes.bool,
	className: PropTypes.string,
};

const defaultProps = {
	topOuterDivider: false,
	topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
	const classes = classNames(
		"site-footer center-content-mobile",
		topOuterDivider && "has-top-divider",
		className,
	);

	return (
		<footer {...props} className={classes}>
			<div className="container">
				<div className={classNames("site-footer-inner", topDivider && "has-top-divider")}>
					<div className="footer-top space-between text-xxs">
						<Logo />
						<FooterSocial />
					</div>
					<div className="footer-bottom space-between text-xxs invert-order-desktop">
						<FooterNav />
						<FooterCopyright />
					</div>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
