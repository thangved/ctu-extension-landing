import classNames from "classnames";
import PropTypes from "prop-types";
import FormHint from "./FormHint";
import FormLabel from "./FormLabel";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  labelHidden: PropTypes.bool,
  name: PropTypes.string,
  status: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string,
  placeholder: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string,
};

const defaultProps = {
  children: null,
  label: "",
  labelHidden: false,
  name: undefined,
  status: "",
  disabled: false,
  value: undefined,
  size: "",
  placeholder: null,
  hint: null,
};

/**
 * Renders a custom select component with optional label, hint, and various styling options.
 * @param {object} props - Additional props to spread on the select element.
 * @param {string} props.className - Additional CSS class for the select component.
 * @param {import("react").ReactNode} props.children - The options to be displayed within the select element.
 * @param {string} props.label - The text label for the select component.
 * @param {boolean} props.labelHidden - Determines if the label is hidden.
 * @param {string} props.name - The name attribute of the select element.
 * @param {string} props.status - The status of the select component.
 * @param {boolean} props.disabled - Indicates if the select component is disabled.
 * @param {any} props.value - The selected value of the select component.
 * @param {string} props.size - The size of the select component.
 * @param {string} props.placeholder - The placeholder text for the select component.
 * @param {string} props.hint - The hint text to display below the select component.
 * @returns {import("react").ReactElement} A custom select component with specified properties.
 */
const Select = ({
  className,
  children,
  label,
  labelHidden,
  name,
  status,
  disabled,
  value,
  size,
  placeholder,
  hint,
  ...props
}) => {
  const classes = classNames(
    "form-select",
    size && `form-select-${size}`,
    status && `form-${status}`,
    className,
  );

  return (
    <>
      {label && (
        <FormLabel labelHidden={labelHidden} id={props.id}>
          {label}
        </FormLabel>
      )}
      <select {...props} className={classes} name={name} disabled={disabled} value={value}>
        {placeholder && (
          <option hidden value="">
            {placeholder}
          </option>
        )}
        {children}
      </select>
      {hint && <FormHint status={status}>{hint}</FormHint>}
    </>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
