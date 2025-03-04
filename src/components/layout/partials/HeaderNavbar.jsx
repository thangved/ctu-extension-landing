import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useInstallExtension from '../../../hooks/useInstallExtension';

const propTypes = {
  hideSignin: PropTypes.bool,
  navPosition: PropTypes.string,
};

/**
 * Navbar component
 * @param {object} props - The props
 * @param {boolean} props.hideSignin - Hide the sign in button
 * @param {string} props.navPosition - The position of the navbar
 * @returns {import("react").ReactElement} Navbar component
 */
export default function HeaderNavbar({ hideSignin: hideInstall, navPosition }) {
  const [isActive, setIsActive] = useState(false);
  const { isSupported, installUrl } = useInstallExtension();

  const hamburger = useRef(null);
  const nav = useRef(null);

  const openMenu = useCallback(() => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = `${nav.current.scrollHeight}px`;
    setIsActive(true);
  }, []);

  const closeMenu = useCallback(() => {
    document.body.classList.remove('off-nav-is-active');

    setIsActive(false);
  }, []);

  const clickOutside = useCallback((e) => {
    if (!nav.current) return;
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }, []);

  const keyPress = useCallback(
    (e) => {
      isActive && e.keyCode === 27 && closeMenu();
    },
    [isActive, closeMenu],
  );

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });

  return (
    <>
      <button
        ref={hamburger}
        className="header-nav-toggle"
        onClick={isActive ? closeMenu : openMenu}
      >
        <span className="screen-reader">Menu</span>
        <span className="hamburger">
          <span className="hamburger-inner" />
        </span>
      </button>
      <nav ref={nav} className={classNames('header-nav', isActive && 'is-active')}>
        <div className="header-nav-inner">
          <ul
            className={classNames('list-reset text-xs', navPosition && `header-nav-${navPosition}`)}
          >
            <Link to="/docs" onClick={closeMenu}>
              Tài liệu
            </Link>
            {!hideInstall && isSupported && (
              <Link
                to={installUrl}
                target="_blank"
                className="button button-primary button-wide-mobile button-sm"
                onClick={closeMenu}
              >
                Cài đặt
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

HeaderNavbar.propTypes = propTypes;
