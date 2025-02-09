// import sections
import Hero from "../components/sections/Hero";
import Testimonial from "../components/sections/Testimonial";

/**
 * Renders the Home component with a Hero section and a Testimonial section.
 * @returns {import("react").ReactElement} JSX element representing the Home component.
 */
const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <Testimonial />
    </>
  );
};

export default Home;
