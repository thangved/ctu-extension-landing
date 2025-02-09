import classNames from 'classnames';
import PropTypes from 'prop-types';
import { SectionProps as SectionProperties } from '../../utils/SectionProps';

const propTypes = {
  children: PropTypes.node,
  ...SectionProperties.types,
};

const defaultProps = {
  children: null,
  ...SectionProperties.defaults,
};

/**
 * Functional component for rendering a generic section with customizable dividers, background color, and text color.
 * @param {object} props - Additional props to be spread on the section element.
 * @param {string} props.className - Additional CSS class names for the section.
 * @param {import("react").ReactNode} props.children - The content to be displayed within the section.
 * @param {boolean} props.topOuterDivider - Whether the section has a top outer divider.
 * @param {boolean} props.bottomOuterDivider - Whether the section has a bottom outer divider.
 * @param {boolean} props.topDivider - Whether the section has a top inner divider.
 * @param {boolean} props.bottomDivider - Whether the section has a bottom inner divider.
 * @param {boolean} props.hasBgColor - Whether the section has a background color.
 * @param {boolean} props.invertColor - Whether to invert the text color.
 * @returns {import("react").ReactElement} React component
 */
const GenericSection = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...properties
}) => {
  const outerClasses = classNames(
    'section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  );

  const innerClasses = classNames(
    'section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  );

  return (
    <section {...properties} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>{children}</div>
      </div>
    </section>
  );
};

GenericSection.propTypes = propTypes;
GenericSection.defaultProps = defaultProps;

export default GenericSection;
