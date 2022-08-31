/** @format */

import "./Sidenav.scss";
import * as Scroll from "react-scroll";
import { sideAnimation } from "../animation/Animation";
import { motion } from "framer-motion";
import { useContext } from "react";
import { GlobalState } from "../globalstate/Context";

const Sidenav = () => {
  // create smaooth scroll
  const Link = Scroll.Link;
  // supply global state

  const { setdisplay } = useContext(GlobalState);
  return (
    <motion.div
      className="sidenav"
      variants={sideAnimation.parent}
      initial="hidden"
      animate="show"
      exit="hide">
      <ul>
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
          <motion.li
            variants={sideAnimation.child}
            onClick={() => setdisplay(false)}>
            home
          </motion.li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          <motion.li
            variants={sideAnimation.child}
            onClick={() => setdisplay(false)}>
            about
          </motion.li>
        </Link>
        <Link to="services" spy={true} smooth={true} offset={50} duration={500}>
          <motion.li
            variants={sideAnimation.child}
            onClick={() => setdisplay(false)}>
            services
          </motion.li>
        </Link>
      </ul>
    </motion.div>
  );
};

export default Sidenav;
