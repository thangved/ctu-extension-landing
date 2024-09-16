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
