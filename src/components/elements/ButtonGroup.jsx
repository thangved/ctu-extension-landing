import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
};

/**
 * Button group component
 * @param {object} props - The props
 * @param {string} props.className - The class name
 * @returns {import("react").ReactElement} - The button group component
 */
const ButtonGroup = ({ className, ...properties }) => {
  const classes = classNames('button-group', className);

  return <div {...properties} className={classes} />;
};

ButtonGroup.propTypes = propTypes;
export default ButtonGroup;
