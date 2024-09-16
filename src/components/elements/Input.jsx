import classNames from "classnames";
import PropTypes from "prop-types";
import FormHint from "./FormHint";
import FormLabel from "./FormLabel";

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	label: PropTypes.string,
	labelHidden: PropTypes.bool,
	type: PropTypes.oneOf([
		"textarea",
		"text",
		"email",
		"tel",
		"password",
		"number",
		"search",
		"color",
		"date",
		"time",
		"datetime-local",
	]),
	name: PropTypes.string,
	status: PropTypes.string,
	disabled: PropTypes.bool,
	value: PropTypes.string,
	formGroup: PropTypes.string,
	hasIcon: PropTypes.string,
	size: PropTypes.string,
	placeholder: PropTypes.string,
	rows: PropTypes.number,
	hint: PropTypes.string,
	id: PropTypes.string,
};

const defaultProps = {
	children: null,
	label: "",
	labelHidden: false,
	type: "text",
	name: undefined,
	status: "",
	disabled: false,
	value: undefined,
	formGroup: null,
	hasIcon: null,
	size: "",
	placeholder: "",
	rows: 3,
	hint: null,
};

/**
 * Functional component for rendering an input element with label, hint, and optional icon.
 * @param {object} props - The properties object containing:
 * @param {string} props.className - Additional CSS class for the input element.
 * @param {string} props.children - Additional elements to be rendered inside the input component.
 * @param {string} props.label - The label text for the input element.
 * @param {boolean} props.labelHidden - Determines if the label is hidden.
 * @param {string} props.type - The type of input element (e.g., text, password).
 * @param {string} props.name - The name attribute of the input element.
 * @param {string} props.status - The status of the input element (e.g., success, error).
 * @param {boolean} props.disabled - Indicates if the input element is disabled.
 * @param {string} props.value - The value of the input element.
 * @param {string} props.formGroup - The form group style for the input element.
 * @param {string} props.hasIcon - The icon class for the input element.
 * @param {string} props.size - The size of the input element.
 * @param {string} props.placeholder - The placeholder text for the input element.
 * @param {number} props.rows - The number of rows for a textarea element.
 * @param {string} props.hint - The hint text for the input element.
 * @returns {import("react").ReactElement} React component representing an input element with label, hint, and optional icon.
 */
const Input = ({
	className,
	children,
	label,
	labelHidden,
	type,
	name,
	status,
	disabled,
	value,
	formGroup,
	hasIcon,
	size,
	placeholder,
	rows,
	hint,
	...props
}) => {
	const wrapperClasses = classNames(
		formGroup &&
			formGroup !== "" &&
			(formGroup === "desktop" ? "form-group-desktop" : "form-group"),
		hasIcon && hasIcon !== "" && `has-icon-${hasIcon}`,
	);

	const classes = classNames(
		"form-input",
		size && `form-input-${size}`,
		status && `form-${status}`,
		className,
	);

	const Component = type === "textarea" ? "textarea" : "input";
	return (
		<>
			{label && (
				<FormLabel labelHidden={labelHidden} id={props.id}>
					{label}
				</FormLabel>
			)}
			<div className={wrapperClasses}>
				<Component
					{...props}
					type={type !== "textarea" ? type : null}
					className={classes}
					name={name}
					disabled={disabled}
					value={value}
					placeholder={placeholder}
					rows={type === "textarea" ? rows : null}
				/>
				{children}
			</div>
			{hint && <FormHint status={status}>{hint}</FormHint>}
		</>
	);
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
