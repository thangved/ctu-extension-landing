import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import FeedbackCard from "../elements/FeedbackCard";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};

/**
 * Testimonial component for displaying user feedback.
 * @param {object} props - Additional props to spread to the component.
 * @param {string} props.className - The CSS class name for the component.
 * @param {boolean} props.topOuterDivider - Whether to display a top outer divider.
 * @param {boolean} props.bottomOuterDivider - Whether to display a bottom outer divider.
 * @param {boolean} props.topDivider - Whether to display a top divider.
 * @param {boolean} props.bottomDivider - Whether to display a bottom divider.
 * @param {boolean} props.hasBgColor - Whether the component has a background color.
 * @param {boolean} props.invertColor - Whether to invert the color scheme.
 * @param {boolean} props.pushLeft - Whether to push the content to the left.
 * @returns {import("react").ReactElement} React component representing the testimonial section with user feedback.
 */
const Testimonial = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		"testimonial section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className,
	);

	const innerClasses = classNames(
		"testimonial-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider",
	);

	const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

	const sectionHeader = {
		title: "Phản hồi của người dùng",
		paragraph: "Nhận xét của người dùng về CTU Extension",
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>
						<FeedbackCard
							title="Pru pruu pru pruu pruuuu pru pruuuuuuuuuuu"
							author="Chim cánh cụt"
							company="CTU Extension"
						/>

						<FeedbackCard
							title="Pip pip pip pip pip pip pip, pip pip pip pip pip pip pip pip pip pip pip pip. Pip pip pip pip pip pip pip."
							author="Gà giấu tên"
							company="CTU Extension"
						/>

						<FeedbackCard
							title="Quack quack quack quack quack quack quack quack quack quack quack quack quack."
							author="Zịt hacker"
							company="CTU Extension"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
