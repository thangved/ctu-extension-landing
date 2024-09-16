import classNames from "classnames";
import PropTypes from "prop-types";

const propTypes = {
	children: PropTypes.node,
	name: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	checked: PropTypes.bool,
	className: PropTypes.string,
};

const defaultProps = {
	children: null,
	name: undefined,
	value: undefined,
	disabled: false,
	checked: undefined,
};

/**
 * Functional component for rendering a checkbox input with label.
 * @param {object} props - The properties for the Checkbox component.
 * @param {string} props.className - The CSS class for styling purposes.
 * @param {string} props.children - The label text for the checkbox.
 * @param {string} props.name - The name attribute for the checkbox input.
 * @param {string} props.value - The value attribute for the checkbox input.
 * @param {boolean} props.disabled - Indicates if the checkbox is disabled.
 * @param {boolean} props.checked - Indicates if the checkbox is checked by default.
 * @returns {import("react").ReactElement} Checkbox component with label and input.
 */
const Checkbox = ({ className, children, name, value, disabled, checked, ...props }) => {
	const classes = classNames("form-checkbox", className);

	return (
		<label className={classes}>
			<input
				{...props}
				type="checkbox"
				name={name}
				value={value}
				disabled={disabled}
				checked={checked}
			/>
			{children}
		</label>
	);
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
