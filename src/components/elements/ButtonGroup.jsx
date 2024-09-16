import classNames from "classnames";
import PropTypes from "prop-types";

const propTypes = {
	className: PropTypes.string,
};

/**
 * Button group component
 * @param {object} props
 */
const ButtonGroup = ({ className, ...props }) => {
	const classes = classNames("button-group", className);

	return <div {...props} className={classes} />;
};

ButtonGroup.propTypes = propTypes;
export default ButtonGroup;
