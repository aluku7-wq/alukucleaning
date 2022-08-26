/** @format */

import "./Services.scss";
import { BiWalletAlt } from "react-icons/bi";
import { MdCleanHands, MdCleaningServices } from "react-icons/md";
import { TbShoppingCartDiscount } from "react-icons/tb";

const Services = () => {
  return (
    <div className="services_container">
      <h4>our services</h4>
      <h1>What You Get</h1>
      <div className="cards">
        <div className="card">
          <div className="icon_container">
            <MdCleanHands className="icon" />
          </div>
          <h4>Highly Experienced Cleaning Team</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            perspiciatis expedita neque? Cumque, saepe libero.
          </p>
        </div>

        <div className="card">
          <div className="icon_container">
            <MdCleaningServices className="icon" />
          </div>
          <h4>All Equipment And Chemicals Provided</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            perspiciatis expedita neque? Cumque, saepe libero.
          </p>
        </div>

        <div className="card">
          <div className="icon_container">
            <TbShoppingCartDiscount className="icon" />
          </div>
          <h4>Insured Service Against Damages</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            perspiciatis expedita neque? Cumque, saepe libero.
          </p>
        </div>
        <div className="card">
          <div className="icon_container">
            <BiWalletAlt className="icon" />
          </div>
          <h4>All Equipment And Chemicals Provided</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            perspiciatis expedita neque? Cumque, saepe libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
