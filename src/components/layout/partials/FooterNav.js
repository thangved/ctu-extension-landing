import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
	const classes = classNames("footer-nav", className);

	return (
		<nav {...props} className={classes}>
			<ul className="list-reset">
				<li>
					<Link to="#0">Liên hệ</Link>
				</li>
				<li>
					<Link to="#0">Về chúng tôi</Link>
				</li>
				<li>
					<Link to="#0">FAQ's</Link>
				</li>
				<li>
					<Link to="#0">Hỗ trợ</Link>
				</li>
			</ul>
		</nav>
	);
};

export default FooterNav;
