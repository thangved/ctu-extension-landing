import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import Image from '../../elements/Image';

const propTypes = {
  className: PropTypes.string,
};

/**
 * Logo component
 * @param {object} props - The props
 * @param {string} props.className - The class name
 * @returns {import("react").ReactElement} - The logo component
 */
const Logo = ({ className, ...properties }) => {
  const classes = classNames('brand', className);

  return (
    <div {...properties} className={classes}>
      <h1 className="m-0">
        <Link to="/">
          <Image src={logo} alt="Open" width={32} height={32} />
        </Link>
      </h1>
    </div>
  );
};

Logo.propTypes = propTypes;
export default Logo;
