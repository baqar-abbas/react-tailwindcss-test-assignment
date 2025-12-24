import Hero from "../components/Hero";
import FeaturesGrid from "../components/FeaturesGrid";
import TestimonialCarousel from "../components/TestimonialCarousel";
import SetappCarousal from "../components/SetappCarousal";
import CallToAction from "../components/CallToAction";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <FeaturesGrid />
      <TestimonialCarousel />
      <SetappCarousal />
      <CallToAction />
    </main>
  );
};

export default Homepage;
