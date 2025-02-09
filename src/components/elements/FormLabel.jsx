import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  labelHidden: PropTypes.bool,
  id: PropTypes.string,
};

const defaultProps = {
  children: null,
  labelHidden: false,
  id: null,
};

/**
 * Functional component for rendering a form label.
 * @param {object} props - Additional props to be spread on the label element.
 * @param {string} props.className - The CSS class for the label.
 * @param {import("react").ReactNode} props.children - The content to be displayed within the label.
 * @param {boolean} props.labelHidden - Indicates if the label is visually hidden.
 * @param {string} props.id - The unique identifier for the label.
 * @returns {import("react").ReactElement} A label element with specified properties.
 */
const FormLabel = ({ className, children, labelHidden, id, ...props }) => {
  FormLabel.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    labelHidden: PropTypes.bool,
    id: PropTypes.string,
  };

  const classes = useMemo(
    () => classNames('form-label', Boolean(labelHidden) && 'screen-reader', className),
    [labelHidden, className],
  );

  return (
    <label {...props} className={classes} htmlFor={id}>
      {children}
    </label>
  );
};

FormLabel.propTypes = propTypes;
FormLabel.defaultProps = defaultProps;

export default FormLabel;
