import { throttle } from "lodash";
import PropTypes from "prop-types";
import React, { useEffect, useImperativeHandle, useState } from "react";

const ScrollReveal = React.forwardRef(function ScrollReveal(props, ref) {
	const [viewportHeight, setViewportheight] = useState(window.innerHeight);
	const [revealEl, setRevealel] = useState([]);

	/**
	 * @description Check if all elements are revealed
	 */
	const checkComplete = () => {
		return revealEl.length <= document.querySelectorAll("[class*=reveal-].is-revealed").length;
	};

	/**
	 * @description Check if element is visible
	 */
	const elementIsVisible = (el, offset) => {
		return el.getBoundingClientRect().top <= viewportHeight - offset;
	};

	/**
	 * @description Reveal elements
	 */
	const revealElements = () => {
		if (checkComplete()) return;
		for (let i = 0; i < revealEl.length; i++) {
			const el = revealEl[i];
			const revealDelay = el.getAttribute("data-reveal-delay");
			const revealOffset = el.getAttribute("data-reveal-offset")
				? el.getAttribute("data-reveal-offset")
				: "200";
			const listenedEl = el.getAttribute("data-reveal-container")
				? el.closest(el.getAttribute("data-reveal-container"))
				: el;
			if (elementIsVisible(listenedEl, revealOffset) && !el.classList.contains("is-revealed")) {
				if (revealDelay && revealDelay !== 0) {
					setTimeout(function () {
						el.classList.add("is-revealed");
					}, revealDelay);
				} else {
					el.classList.add("is-revealed");
				}
			}
		}
	};

	useImperativeHandle(ref, () => ({
		init() {
			setRevealel(document.querySelectorAll("[class*=reveal-]"));
		},
	}));

	/**
	 * @description Handle listeners
	 */
	const handleListeners = () => {
		if (!checkComplete()) return;
		window.removeEventListener("scroll", handleScroll);
		window.removeEventListener("resize", handleResize);
	};

	/**
	 * @description Throttle function
	 */
	const handleScroll = throttle(() => {
		handleListeners();
		revealElements();
	}, 30);

	/**
	 * @description Throttle function
	 */
	const handleResize = throttle(() => {
		setViewportheight(window.innerHeight);
	}, 30);

	useEffect(() => {
		if (typeof revealEl !== "undefined" && revealEl.length > 0) {
			if (!checkComplete()) {
				window.addEventListener("scroll", handleScroll);
				window.addEventListener("resize", handleResize);
			}
			revealElements();
		}
	}, [revealEl]);

	/**
	 * @description Remove listeners if all elements are revealed
	 */

	useEffect(() => {
		handleListeners();
		revealElements();
	}, [viewportHeight]);

	return <>{props.children()}</>;
});

ScrollReveal.propTypes = {
	children: PropTypes.func.isRequired,
};

export default ScrollReveal;
