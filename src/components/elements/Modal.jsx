import classNames from "classnames";
import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	handleClose: PropTypes.func.isRequired,
	show: PropTypes.bool,
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

/**
 * @description Modal component
 * @param {object} props
 */
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
	const stopPropagation = useCallback((e) => {
		e.stopPropagation();
	}, []);

	const keyPress = useCallback((e) => {
		e.keyCode === 27 && handleClose(e);
	}, []);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		document.addEventListener("click", stopPropagation);
		return () => {
			document.removeEventListener("keydown", keyPress);
			document.removeEventListener("click", stopPropagation);
		};
	});

	const handleBodyClass = useCallback(() => {
		if (document.querySelectorAll(".modal.is-active").length) {
			document.body.classList.add("modal-is-active");
		} else {
			document.body.classList.remove("modal-is-active");
		}
	}, []);

	useEffect(() => {
		handleBodyClass();
	}, [props.show]);

	const classes = classNames("modal", show && "is-active", video && "modal-video", className);

	return (
		show && (
			<div {...props} className={classes} onClick={handleClose} aria-hidden>
				<div className="modal-inner" onClick={stopPropagation} aria-hidden>
					{video ? (
						<div className="responsive-video">
							{videoTag === "iframe" ? (
								<iframe
									sandbox="allow-scripts allow-same-origin"
									title="video"
									src={video}
									frameBorder="0"
									allowFullScreen
								/>
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
