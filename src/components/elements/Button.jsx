import classNames from "classnames";
import PropTypes from "prop-types";

const propTypes = {
	className: PropTypes.string,
	tag: PropTypes.elementType,
	color: PropTypes.string,
	size: PropTypes.string,
	loading: PropTypes.bool,
	wide: PropTypes.bool,
	wideMobile: PropTypes.bool,
	disabled: PropTypes.bool,
	icon: PropTypes.node,
	children: PropTypes.node,
};

const defaultProps = {
	tag: "button",
	color: "",
	size: "",
	loading: false,
	wide: false,
	wideMobile: false,
	disabled: false,
};

const Button = ({
	className,
	tag,
	color,
	size,
	loading,
	wide,
	wideMobile,
	disabled,
	icon,
	children,
	...props
}) => {
	const classes = classNames(
		"button",
		color && `button-${color}`,
		size && `button-${size}`,
		loading && "is-loading",
		wide && "button-block",
		wideMobile && "button-wide-mobile",
		className,
	);

	const Component = tag;
	return (
		<Component {...props} className={classes} disabled={disabled}>
			{children} {icon}
		</Component>
	);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
