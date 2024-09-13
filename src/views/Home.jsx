// import sections
import Cta from "../components/sections/Cta";
import Hero from "../components/sections/Hero";
import Testimonial from "../components/sections/Testimonial";

const Home = () => {
	return (
		<>
			<Hero className="illustration-section-01" />

			<Testimonial />

			<Cta split />
		</>
	);
};

export default Home;
