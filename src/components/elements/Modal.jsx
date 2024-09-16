import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
	children: PropTypes.node,
	handleClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	closeHidden: PropTypes.bool,
	video: PropTypes.string,
	videoTag: PropTypes.oneOf(["iframe", "video"]),
	subtitle: PropTypes.string,
};

const defaultProps = {
	children: null,
	show: false,
	closeHidden: false,
	video: "",
	videoTag: "iframe",
	subtitle: null,
};

const Modal = ({
	className,
	children,
	handleClose,
	show,
	closeHidden,
	video,
	videoTag,
	subtitle,
	...props
}) => {
	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		document.addEventListener("click", stopProgagation);
		return () => {
			document.removeEventListener("keydown", keyPress);
			document.removeEventListener("click", stopProgagation);
		};
	});

	useEffect(() => {
		handleBodyClass();
	}, [props.show]);

	const handleBodyClass = useCallback(() => {
		if (document.querySelectorAll(".modal.is-active").length) {
			document.body.classList.add("modal-is-active");
		} else {
			document.body.classList.remove("modal-is-active");
		}
	}, []);

	const keyPress = useCallback((e) => {
		e.keyCode === 27 && handleClose(e);
	}, []);

	const stopProgagation = useCallback((e) => {
		e.stopPropagation();
	}, []);

	const classes = classNames("modal", show && "is-active", video && "modal-video", className);

	return (
		show && (
			<div {...props} className={classes} onClick={handleClose} aria-hidden>
				<div className="modal-inner" onClick={stopProgagation} aria-hidden>
					{video ? (
						<div className="responsive-video">
							{videoTag === "iframe" ? (
								<iframe title="video" src={video} frameBorder="0" allowFullScreen />
							) : (
								<video controls src={video}>
									<track default kind="captions" srcLang="en" src={subtitle} />
								</video>
							)}
						</div>
					) : (
						<>
							{!closeHidden && (
								<button className="modal-close" aria-label="close" onClick={handleClose} />
							)}
							<div className="modal-content">{children}</div>
						</>
					)}
				</div>
			</div>
		)
	);
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
