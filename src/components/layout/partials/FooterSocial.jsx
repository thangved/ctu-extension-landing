import classNames from "classnames";
import PropTypes from "prop-types";
import FbIcon from "../../../icons/Fb";
import IgIcon from "../../../icons/Ig";

const propTypes = {
	className: PropTypes.string,
};

/**
 * Footer social component
 * @param {object} props - The props
 * @param {string} props.className - The class name
 * @returns {import("react").ReactElement} - The footer social component
 */
const FooterSocial = ({ className, ...props }) => {
	const classes = classNames("footer-social", className);

	return (
		<div {...props} className={classes}>
			<ul className="list-reset">
				<li>
					<a target="_blank" rel="noopener noreferrer" href="https://facebook.com/thangved">
						<FbIcon />
					</a>
				</li>

				<li>
					<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/thangved">
						<IgIcon />
					</a>
				</li>
			</ul>
		</div>
	);
};

FooterSocial.propTypes = propTypes;
export default FooterSocial;
