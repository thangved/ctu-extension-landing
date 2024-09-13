import classNames from "classnames";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
	hideSignin: PropTypes.bool,
	navPosition: PropTypes.string,
};

export default function Navbar({ hideSignin, navPosition }) {
	const [isActive, setIsActive] = useState(false);

	const hamburger = useRef(null);
	const nav = useRef(null);

	const openMenu = useCallback(() => {
		document.body.classList.add("off-nav-is-active");
		nav.current.style.maxHeight = `${nav.current.scrollHeight}px`;
		setIsActive(true);
	}, []);

	const closeMenu = useCallback(() => {
		document.body.classList.remove("off-nav-is-active");

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
		document.addEventListener("keydown", keyPress);
		document.addEventListener("click", clickOutside);
		return () => {
			document.removeEventListener("keydown", keyPress);
			document.removeEventListener("click", clickOutside);
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
			<nav ref={nav} className={classNames("header-nav", isActive && "is-active")}>
				<div className="header-nav-inner">
					<ul
						className={classNames("list-reset text-xs", navPosition && `header-nav-${navPosition}`)}
					>
						<li>
							<Link to="/docs" onClick={closeMenu}>
								Tài liệu
							</Link>
						</li>
					</ul>
					{!hideSignin && (
						<ul className="list-reset header-nav-right">
							<li>
								<Link
									to="//chrome.google.com/webstore/detail/ctu-management-system-ext/lggkifjaacghbpebpcbaneimpogjbnmf"
									target="_blank"
									className="button button-primary button-wide-mobile button-sm"
									onClick={closeMenu}
								>
									Cài đặt
								</Link>
							</li>
						</ul>
					)}
				</div>
			</nav>
		</>
	);
}

Navbar.propTypes = propTypes;
