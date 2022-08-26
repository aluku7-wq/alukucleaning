/** @format */

import "./Footer.scss";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      {/* start of header */}
      <div className="footer_header">
        <div className="text">
          <h4>booking</h4>
          <h1>Book service online</h1>
          <p>
            Booking sevice with as is very easy. simoly click the button below
            and you will be directed to a page where you can require required
            details so we can reach you out
          </p>
          <button>booking</button>
        </div>
      </div>

      {/* start of quick links and subscriptions */}
      <div className="quick_links">
        <div className="logo">
          <img src="./images/logo.png" alt="" /> <h3>aluku cleaning</h3>
        </div>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>booking</li>
        </ul>
        <div className="subscription">
          <form>
            <input type="text" placeholder="Email Address" />
            <button>subscribe</button>
          </form>
        </div>
      </div>
      {/* start of copyright */}
      <div className="copyright">
        <p> &copy; 2022 aluku Cleaning Service. All rights reserved.</p>
        <div className="media">
          <BsInstagram />
          <FaLinkedinIn />
          <FaFacebookF />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
