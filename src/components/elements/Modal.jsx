import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import ReactPlayer from 'react-player';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  closeHidden: PropTypes.bool,
  video: PropTypes.string,
  videoTag: PropTypes.oneOf(['iframe', 'video']),
  subtitle: PropTypes.string,
};

const defaultProps = {
  children: null,
  show: false,
  closeHidden: false,
  video: '',
  videoTag: 'iframe',
  subtitle: null,
};

/**
 * Modal component
 * @param {object} props - Modal component props
 * @param {string} props.className - Additional classes
 * @param {import("react").ReactNode} props.children - Modal content
 * @param {import("react").ReactEventHandler} props.handleClose - Close modal function
 * @param {boolean} props.show - Show modal
 * @param {boolean} props.closeHidden - Hide close button
 * @param {string} props.video - Video URL
 * @returns {import("react").ReactElement} Modal component
 */
const Modal = ({ className, children, handleClose, show, closeHidden, video, ...props }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const keyPress = useCallback((e) => {
    e.keyCode === 27 && handleClose(e);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', stopPropagation);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', stopPropagation);
    };
  });

  const handleBodyClass = useCallback(() => {
    if (document.querySelectorAll('.modal.is-active').length) {
      document.body.classList.add('modal-is-active');
    } else {
      document.body.classList.remove('modal-is-active');
    }
  }, []);

  useEffect(() => {
    handleBodyClass();
  }, [props.show]);

  const classes = classNames('modal', show && 'is-active', video && 'modal-video', className);

  return (
    show && (
      <div {...props} className={classes} onClick={handleClose} aria-hidden>
        <div className="modal-inner" onClick={stopPropagation} aria-hidden>
          {video ? (
            <div className="responsive-video">
              <ReactPlayer url={video} controls width="100%" height="100%" />
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
