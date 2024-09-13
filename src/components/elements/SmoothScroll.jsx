import React, { useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
	children: PropTypes.node,
	to: PropTypes.string.isRequired,
	duration: PropTypes.number,
	onLinkClick: PropTypes.func,
	className: PropTypes.string,
};

const SmoothScroll = ({ className, children, to, duration, onLinkClick, ...props }) => {
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
