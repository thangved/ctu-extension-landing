import classNames from "classnames";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  value: PropTypes.string,
  rightLabel: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  name: undefined,
  value: undefined,
  rightLabel: undefined,
  disabled: false,
  checked: undefined,
};

/**
 * Functional component for a custom switch element.
 * @param {object} props - Additional props to spread on the input element.
 * @param {string} props.className - Additional CSS class for styling.
 * @param {import("react").ReactNode} props.children - The content of the switch element.
 * @param {string} props.name - The name attribute of the input element.
 * @param {string} props.value - The value attribute of the input element.
 * @param {string} props.rightLabel - The label displayed on the right side of the switch.
 * @param {boolean} props.disabled - Indicates if the switch is disabled.
 * @param {boolean} props.checked - Indicates if the switch is checked.
 * @returns {import("react").ReactElement} A custom switch element with specified properties.
 */
const Switch = ({ className, children, name, value, rightLabel, disabled, checked, ...props }) => {
  const classes = classNames("form-switch", className);

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
      <span className="form-switch-icon" />
      <span>{children}</span>
      {rightLabel && <span>{rightLabel}</span>}
    </label>
  );
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
