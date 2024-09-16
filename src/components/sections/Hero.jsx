import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import HeroButtons from "./partials/HeroButtons";
import HeroVideo from "./partials/HeroVideo";

const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
};

const Hero = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	const outerClasses = classNames(
		"hero section center-content",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className,
	);

	const innerClasses = classNames(
		"hero-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider",
	);

	return (
		<section {...props} className={outerClasses}>
			<div className="container-sm">
				<div className={innerClasses}>
					<h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
						Một công cụ hữu ích dành cho <span className="text-color-primary">sinh viên CTU</span>
					</h1>
					<p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
						Công cụ này được phát triển với mục đích ban đầu để bỏ qua captcha khi đăng nhập của hệ
						thống quản lý CTU và đang bổ sung thêm nhiều tính năng tiện lợi hơn.
					</p>
					<HeroButtons />
					<HeroVideo />
				</div>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
