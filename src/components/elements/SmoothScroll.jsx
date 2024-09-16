import classNames from "classnames";
import PropTypes from "prop-types";
import { useCallback } from "react";

const propTypes = {
	children: PropTypes.node,
	to: PropTypes.string.isRequired,
	duration: PropTypes.number,
	onLinkClick: PropTypes.func,
	className: PropTypes.string,
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
const SmoothScroll = ({ className, children, to, duration, onLinkClick, ...props }) => {
	/**
	 * Quadratic easing function for smooth scrolling animation
	 * @param {number} t - The current progress of the animation
	 * @returns {number} The eased progress of the animation
	 */
	const easeInOutQuad = (t) => {
		return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
	};

	const scrollToEl = useCallback(
		(startTime, currentTime, timing, scrollEndElemTop, startScrollOffset) => {
			const runtime = currentTime - startTime;
			let progress = runtime / timing;

			progress = Math.min(progress, 1);

			const ease = easeInOutQuad(progress);

			window.scroll(0, startScrollOffset + scrollEndElemTop * ease);
			if (runtime < timing) {
				window.requestAnimationFrame((timestamp) => {
					currentTime = timestamp || new Date().getTime();
					scrollToEl(startTime, currentTime, timing, scrollEndElemTop, startScrollOffset);
				});
			}
		},
		[],
	);

	const smoothScroll = useCallback(
		(e) => {
			e.preventDefault();

			const targetId = to;
			const target = document.getElementById(targetId);
			const timing = duration || 1000;

			if (!target) return;

			onLinkClick?.();

			window.requestAnimationFrame((timestamp) => {
				const stamp = timestamp || new Date().getTime();
				const start = stamp;

				const startScrollOffset = window.pageYOffset;
				const scrollEndElemTop = target.getBoundingClientRect().top;

				scrollToEl(start, stamp, timing, scrollEndElemTop, startScrollOffset);
			});
		},
		[scrollToEl],
	);

	const classes = classNames(className);

	return (
		<a {...props} className={classes} href={`#${to}`} onClick={smoothScroll}>
			{children}
		</a>
	);
};

SmoothScroll.propTypes = propTypes;

export default SmoothScroll;
