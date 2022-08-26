/** @format */

import "./Testimonial.scss";
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg";

const Testimonial = () => {
  return (
    <div className="testmonial">
      <h4>Testimonial</h4>
      <div className="header">
        <button>"</button>
        <h1>Our customers</h1>
      </div>

      <div className="scroll_buttons">
        <CgArrowLongLeft />
        <CgArrowLongRight />
      </div>
      <div className="cards">
        <div className="card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, vero minima aperiam tempore obcaecati fugit fuga veniam
            eaque quas ut error tempora nesciunt, cum similique, dolor
            voluptatem laborum. Minus?
          </p>
          <div className="profile">
            <img src="./images/customer3.jpg" alt="" />
            <div className="text">
              <h4>David Smith</h4>
              <p className="p2">Home Cleaning</p>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, vero minima aperiam tempore obcaecati fugit fuga veniam
            eaque quas ut error tempora nesciunt, cum similique, dolor
            voluptatem laborum. Minus?
          </p>
          <div className="profile">
            <img src="./images/customer2.jpg" alt="" />
            <div className="text">
              <h4>Willain Andrea</h4>
              <p className="p2">Bedroom Cleaning</p>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, vero minima aperiam tempore obcaecati fugit fuga veniam
            eaque quas ut error tempora nesciunt, cum similique, dolor
            voluptatem laborum. Minus?
          </p>
          <div className="profile">
            <img src="./images/customer1.jpg" alt="" />
            <div className="text">
              <h4>Samantha Famor</h4>
              <p className="p2">Office Cleaning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
