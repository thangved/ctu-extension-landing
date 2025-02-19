import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';

const propTypes = {
  src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  width: undefined,
  height: undefined,
  alt: undefined,
};

/**
 * Image component
 * @param {object} props - The props
 * @param {string} props.className - The class name
 * @param {string} props.src - The image source
 * @param {number} props.width - The image width
 * @param {number} props.height - The image height
 * @param {string} props.alt - The image alt text
 * @returns {import("react").ReactElement} - The image component
 */
const Image = ({ className, src, width, height, alt, ...properties }) => {
  const [loaded, setLoaded] = useState(false);

  const image = useRef(null);

  const placeholderSource = useCallback((w, h) => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`;
  }, []);

  const handlePlaceholder = useCallback(
    (img) => {
      const placeholder = document.createElement('img');
      if (!loaded) {
        img.style.display = 'none';
        img.before(placeholder);
        placeholder.src = placeholderSource(
          img.getAttribute('width') || 0,
          img.getAttribute('height') || 0,
        );
        placeholder.width = img.getAttribute('width');
        placeholder.height = img.getAttribute('height');
        placeholder.style.opacity = '0';
        img.className && placeholder.classList.add(img.className);
        placeholder.remove();
        img.style.display = '';
      }
    },
    [placeholderSource, loaded],
  );

  useEffect(() => {
    handlePlaceholder(image.current);
  }, []);

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <img
      {...properties}
      ref={image}
      className={className}
      src={src}
      width={width}
      height={height}
      alt={alt}
      onLoad={onLoad}
    />
  );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
