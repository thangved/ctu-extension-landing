import React from "react";
// import sections
import Cta from "../components/sections/Cta";
import Hero from "../components/sections/Hero";

const Home = () => {
	return (
		<>
			<Hero className="illustration-section-01" />
			{/* <FeaturesTiles /> */}
			{/* <FeaturesSplit
				invertMobile
				topDivider
				imageFill
				className='illustration-section-02'
			/> */}
			{/* <Testimonial topDivider /> */}
			<Cta split />
		</>
	);
};

export default Home;
