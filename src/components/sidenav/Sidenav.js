/** @format */

import "./Sidenav.scss";
import * as Scroll from "react-scroll";
import { useContext, useState } from "react";
import { GlobalState } from "../globalstate/Context";

const Sidenav = () => {
  // create smaooth scroll
  const Link = Scroll.Link;
  // supply global state

  const { display, setdisplay } = useContext(GlobalState);
  console.log(display);
  return (
    <div className="sidenav" style={{ display: display }}>
      <ul>
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
          <li onClick={() => setdisplay("none")}>home</li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          <li onClick={() => setdisplay("none")}>about</li>
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={50}
          duration={5000}>
          <li onClick={() => setdisplay("none")}>services</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidenav;
