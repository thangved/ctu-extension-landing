import classNames from "classnames";
import PropTypes from "prop-types";

const propTypes = {
	children: PropTypes.node,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	checked: PropTypes.bool,
	className: PropTypes.string,
};

const defaultProps = {
	children: null,
	value: "",
	disabled: false,
	checked: false,
};

/**
 * Functional component for rendering a radio input element.
 * @param {object} props - Additional props to be spread on the input element.
 * @param {string} props.className - Additional CSS class for styling.
 * @param {import("react").ReactNode} props.children - The content to be displayed next to the radio input.
 * @param {string} props.name - The name of the radio input.
 * @param {string} props.value - The value of the radio input.
 * @param {boolean} props.disabled - Indicates if the radio input is disabled.
 * @param {boolean} props.checked - Indicates if the radio input is checked.
 * @returns {import("react").ReactElement} Radio input component with label.
 */
const Radio = ({ className, children, name, value, disabled, checked, ...props }) => {
	const classes = classNames("form-radio", className);

	return (
		<label className={classes}>
			<input
				{...props}
				type="radio"
				name={name}
				value={value}
				disabled={disabled}
				checked={checked}
			/>
			{children}
		</label>
	);
};

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
