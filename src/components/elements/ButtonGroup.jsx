import classNames from "classnames";
import PropTypes from "prop-types";

const propTypes = {
	className: PropTypes.string,
};

const ButtonGroup = ({ className, ...props }) => {
	const classes = classNames("button-group", className);

	return <div {...props} className={classes} />;
};

ButtonGroup.propTypes = propTypes;
export default ButtonGroup;
