import Hero from "../components/Hero";
import FeaturesGrid from "../components/FeaturesGrid";
import TestimonialCarousel from "../components/TestimonialCarousel";
import SetappCarousal from "../components/SetappCarousal";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <FeaturesGrid />
      <TestimonialCarousel />
      <SetappCarousal />
    </main>
  );
};

export default Homepage;
