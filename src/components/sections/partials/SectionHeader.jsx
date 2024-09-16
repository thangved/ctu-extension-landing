import classNames from "classnames";
import PropTypes from "prop-types";

const propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		paragraph: PropTypes.string,
	}).isRequired,
	children: PropTypes.node,
	tag: PropTypes.oneOf(["h1", "h2", "h3"]),
	className: PropTypes.string,
};

const defaultProps = {
	children: null,
	tag: "h2",
};

/**
 * Renders a section header component with dynamic content based on the provided data.
 * @param {object} props - The properties for the section header component.
 * @param {string} props.className - The CSS class for styling purposes.
 * @param {object} props.data - The data object containing title and paragraph information.
 * @param {import("react").ReactNode} props.children - The child components to be rendered within the section header.
 * @param {string} props.tag - The HTML tag to be used for the title.
 * @returns {import("react").ReactNode} The rendered section header component.
 */
const SectionHeader = ({ className, data, children, tag, ...props }) => {
	const classes = classNames("section-header", className);

	const Component = tag;

	return (
		(data.title || data.paragraph) && (
			<div {...props} className={classes}>
				<div className="container-xs">
					{children}
					{data.title && (
						<Component className={classNames("mt-0", data.paragraph ? "mb-16" : "mb-0")}>
							{data.title}
						</Component>
					)}
					{data.paragraph && <p className="m-0">{data.paragraph}</p>}
				</div>
			</div>
		)
	);
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;
