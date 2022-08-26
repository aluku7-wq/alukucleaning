/** @format */

import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="overlay">{/* for gray underlying circle */}</div>
      <div className="content">
        <h4>our services</h4>
        <h1>About Our Company</h1>
        <div className="card">
          <img src="./images/about.jpg" alt="" />
          <div className="f_card_text">
            <h1>We Allow You To Be Lazy Get Anything Done In An Instant</h1>
            <p>
              we offer quick but high quality services. Satisfaction Guarantee
              Suffered alteration in which don't look believable. For more
              information about our services click the button below
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
