import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

const propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onLinkClick: PropTypes.func,
  className: PropTypes.string,
};

/**
 * Quadratic easing function for smooth scrolling animation
 * @param {number} t - The current progress of the animation
 * @returns {number} The eased progress of the animation
 */
const easeInOutQuad = (t) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

/**
 * Smoothly scrolls to a specified element on the page when the component link is clicked.
 * Uses a quadratic easing function for smooth scrolling animation.
 * @param {object} props - Additional props to be spread on the link element.
 * @param {string} props.className - The CSS class for styling the link.
 * @param {import("react").ReactNode} props.children - The content to be displayed within the link.
 * @param {string} props.to - The id of the element to scroll to.
 * @param {number} props.duration - The duration of the scrolling animation in milliseconds.
 * @param {import("react").ReactEventHandler} props.onLinkClick - A function to be executed when the link is clicked.
 * @returns {import("react").ReactElement} A link element that smoothly scrolls to a specified element on the page.
 */
const SmoothScroll = ({ className, children, to, duration, onLinkClick, ...properties }) => {
  const scrollToElement = useCallback(
    (startTime, currentTime, timing, scrollEndElementTop, startScrollOffset) => {
      const runtime = currentTime - startTime;
      let progress = runtime / timing;

      progress = Math.min(progress, 1);

      const ease = easeInOutQuad(progress);

      window.scroll(0, startScrollOffset + scrollEndElementTop * ease);
      if (runtime < timing) {
        globalThis.requestAnimationFrame((timestamp) => {
          currentTime = timestamp || Date.now();
          scrollToElement(startTime, currentTime, timing, scrollEndElementTop, startScrollOffset);
        });
      }
    },
    [],
  );

  const smoothScroll = useCallback(
    (e) => {
      e.preventDefault();

      const targetId = to;
      const target = document.querySelector(`#${targetId}`);
      const timing = duration || 1000;

      if (!target) return;

      onLinkClick?.();

      globalThis.requestAnimationFrame((timestamp) => {
        const stamp = timestamp || Date.now();
        const start = stamp;

        const startScrollOffset = window.pageYOffset;
        const scrollEndElementTop = target.getBoundingClientRect().top;

        scrollToElement(start, stamp, timing, scrollEndElementTop, startScrollOffset);
      });
    },
    [scrollToElement],
  );

  const classes = classNames(className);

  return (
    <a {...properties} className={classes} href={`#${to}`} onClick={smoothScroll}>
      {children}
    </a>
  );
};

SmoothScroll.propTypes = propTypes;

export default SmoothScroll;
