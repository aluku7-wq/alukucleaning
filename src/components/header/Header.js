/** @format */

import "./Header.scss";

import * as Scroll from "react-scroll";
import { useContext } from "react";
import { GlobalState } from "../globalstate/Context";
const Header = () => {
  //create smooth scroll
  const Link = Scroll.Link;

  // provide global state
  const { setdisplay } = useContext(GlobalState);
  return (
    <div className="header">
      <div className="logo">
        <img src="./images/logo.png" alt="" />
        <h3>aluku cleaning</h3>
      </div>
      <ul>
        <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
          <li>home</li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={1000}>
          <li>about</li>
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={50}
          duration={1500}>
          <li>services</li>
        </Link>
      </ul>
      <div className="menu" onClick={() => setdisplay(true)}>
        <div className="barone"></div>
        <div className="bartwo"></div>
      </div>
    </div>
  );
};

export default Header;
