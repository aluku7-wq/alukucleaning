/** @format */

import "./Scrolltop.scss";
import * as Scroll from "react-scroll";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";

const Scrolltop = () => {
  const scroll = Scroll.animateScroll;
  return (
    <div className="scrolltop" onClick={() => scroll.scrollToTop()}>
      <HiOutlineArrowNarrowUp />
    </div>
  );
};

export default Scrolltop;
