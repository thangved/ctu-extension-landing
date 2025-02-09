import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  className: PropTypes.string,
};

/**
 * Footer navigation component
 * @param {object} props - FooterNav component props
 * @param {string} props.className - Additional classes
 * @returns {import("react").ReactElement} FooterNav component
 */
const FooterNav = ({ className, ...properties }) => {
  const classes = classNames('footer-nav', className);

  return (
    <nav {...properties} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="/privacy">Quyền riêng tư</Link>
        </li>
      </ul>
    </nav>
  );
};

FooterNav.propTypes = propTypes;
export default FooterNav;
