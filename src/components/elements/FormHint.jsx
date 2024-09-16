import classNames from "classnames";
import PropTypes from "prop-types";

const propTypes = {
	children: PropTypes.node,
	status: PropTypes.string,
	className: PropTypes.string,
};

const defaultProps = {
	children: null,
	status: false,
};

/**
 * Functional component for rendering a form hint.
 * @param {object} props - The properties for the form hint component.
 * @param {string} props.children - The content to be displayed as the form hint.
 * @param {string} props.className - Additional CSS class names for styling purposes.
 * @param {string} props.status - The status of the form hint (e.g., 'success', 'error').
 * @returns {import("react").ReactElement} A div element representing the form hint with specified content and styles.
 */
const FormHint = ({ children, className, status, ...props }) => {
	const classes = classNames("form-hint", status && `text-color-${status}`, className);

	return (
		<div {...props} className={classes}>
			{children}
		</div>
	);
};

FormHint.propTypes = propTypes;
FormHint.defaultProps = defaultProps;

export default FormHint;
