/** @format */

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="./images/logo.png" alt="" />
        <h3>aluku cleaning</h3>
      </div>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>Booking</li>
        <li>contact</li>
      </ul>
      <div className="menu">
        <div className="barone"></div>
        <div className="bartwo"></div>
      </div>
    </div>
  );
};

export default Header;
