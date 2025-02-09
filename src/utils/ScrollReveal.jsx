import { throttle } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useImperativeHandle, useState } from 'react';

const ScrollReveal = React.forwardRef(function ScrollReveal(properties, reference) {
  const [viewportHeight, setViewportheight] = useState(window.innerHeight);
  const [revealElement, setRevealel] = useState([]);

  /**
   * Check if all elements are revealed
   * @returns {boolean} - True if all elements are revealed
   */
  const checkComplete = () => {
    return revealElement.length <= document.querySelectorAll('[class*=reveal-].is-revealed').length;
  };

  /**
   * Check if element is visible
   * @param {HTMLElement} element - The element to check
   * @param {number} offset - The offset
   * @returns {boolean} - True if element is visible
   */
  const elementIsVisible = (element, offset) => {
    return element.getBoundingClientRect().top <= viewportHeight - offset;
  };

  /**
   * Reveal elements
   * @returns {void}
   */
  const revealElements = () => {
    if (checkComplete()) return;
    for (const element of revealElement) {
      const revealDelay = element.dataset.revealDelay;
      const revealOffset = element.dataset.revealOffset ?? '200';
      const listenedElement = element.dataset.revealContainer
        ? element.closest(element.dataset.revealContainer)
        : element;
      if (
        elementIsVisible(listenedElement, revealOffset) &&
        !element.classList.contains('is-revealed')
      ) {
        if (revealDelay && revealDelay !== 0) {
          setTimeout(function () {
            element.classList.add('is-revealed');
          }, revealDelay);
        } else {
          element.classList.add('is-revealed');
        }
      }
    }
  };

  useImperativeHandle(reference, () => ({
    init() {
      setRevealel(document.querySelectorAll('[class*=reveal-]'));
    },
  }));

  /**
   * Throttle function
   * @returns {void}
   */
  const handleScroll = throttle(() => {
    handleListeners();
    revealElements();
  }, 30);

  /**
   * Throttle function
   * @returns {void}
   */
  const handleResize = throttle(() => {
    setViewportheight(window.innerHeight);
  }, 30);

  /**
   * Handle listeners
   * @returns {void}
   */
  function handleListeners() {
    if (!checkComplete()) return;
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  }

  useEffect(() => {
    if (revealElement !== undefined && revealElement.length > 0) {
      if (!checkComplete()) {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
      }
      revealElements();
    }
  }, [revealElement]);

  /**
   * Remove listeners if all elements are revealed
   */

  useEffect(() => {
    handleListeners();
    revealElements();
  }, [viewportHeight]);

  return <>{properties.children()}</>;
});

ScrollReveal.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ScrollReveal;
