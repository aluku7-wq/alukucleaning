/** @format */

import "./Offers.scss";
import { BiWalletAlt } from "react-icons/bi";
import { MdCleanHands, MdCleaningServices } from "react-icons/md";
import { TbShoppingCartDiscount } from "react-icons/tb";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offer_header">
        <h4>our benfits</h4>
        <h1>What we offer</h1>
        <p>
          We offer the best services. Choose us today and you will never
          regrate. we offer services beyond your satisfactory
        </p>
        <button>read more</button>
      </div>
      <div className="services">
        <div className="card">
          <MdCleaningServices className="icon" />
          <div className="card_text">
            <h4>Satisfaction Guarantee</h4>
            <p>
              Satisfaction Guarantee Suffered alteration in which don't look
              believable.
            </p>
          </div>
        </div>
        <div className="card">
          <BiWalletAlt className="icon" />
          <div className="card_text">
            <h4>Secure Payment</h4>
            <p>
              Satisfaction Guarantee Suffered alteration in which don't look
              believable.
            </p>
          </div>
        </div>
        <div className="card">
          <MdCleanHands className="icon" />
          <div className="card_text">
            <h4>Clean & Friendly</h4>
            <p>
              Satisfaction Guarantee Suffered alteration in which don't look
              believable.
            </p>
          </div>
        </div>
        <div className="card">
          <TbShoppingCartDiscount className="icon" />
          <div className="card_text">
            <h4>Always Discount</h4>
            <p>
              Satisfaction Guarantee Suffered alteration in which don't look
              believable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
