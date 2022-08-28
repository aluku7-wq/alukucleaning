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
      <div id="hero">
        <Hero />
      </div>
      <div id="offers">
        <Offers />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="data">
        <Data />
      </div>
    </div>
  );
};

export default Homepage;
