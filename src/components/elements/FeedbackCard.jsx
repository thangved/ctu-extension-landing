import PropTypes from "prop-types";

/**
 * Feedback card component
 * @param {object} props - FeedbackCard component props
 * @param {string} props.title - The feedback
 * @param {string} props.author - The author
 * @param {string} props.company - The company
 * @returns {import("react").ReactElement} - The feedback card
 */
export default function FeedbackCard({ title, author, company }) {
	return (
		<div className="tiles-item reveal-from-right" data-reveal-delay="200">
			<div className="tiles-item-inner">
				<div className="testimonial-item-content text-sm mb-0">— {title}</div>
				<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
					<span className="testimonial-item-name text-color-high">{author}</span>
					<span className="text-color-low"> / </span>
					<span className="testimonial-item-link">{company}</span>
				</div>
			</div>
		</div>
	);
}

FeedbackCard.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
};
