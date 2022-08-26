/** @format */

import "./Homepage.scss";

import Hero from "./hero/Hero";
import Offers from "./offers/Offers";
import About from "./about/About";
import Services from "./services/Services";
import Testimonial from "./testimonial/Testimonial";
import Data from "./customerdata/Data";
const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />

      <Offers />

      <About />

      <Services />

      <Testimonial />

      <Data />
    </div>
  );
};

export default Homepage;
