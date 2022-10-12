import React from "react";
import PropType from "prop-types";
import { BiCart } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
// const Header = ({ searchEnabled = true }) => {
const Header = () => {
  return (
    <div className="barnav">
      <div className="row">
        <div className="col-2 col-sm-2col-md-2 colbarnav">
          <div className="menu-icon">
            <FiMenu size="2rem" />
          </div>
        </div>
        <div className="col-2 col-sm-2col-md-2 colbarnav">
          <div className="namewebsite">PT Pensa Tipico</div>
        </div>
        <div className="col-2 col-sm-2col-md-2 colbarnav">
          <input className="form-control" type="text" placeholder="Cerca su pt.com"></input>
          {/* {searchEnabled && <input type="text" />} */}
        </div>
        <div className="col-2 col-sm-2col-md-2 colbarnav">
          <div className="account-icon">
            Account
            <AiOutlineUser size="2rem" />
          </div>
          {/* Passo una props --> Proprietà */}
        </div>

        <div className="col-2 col-sm-2col-md-2 colbarnav">
          <div className="cart-icon">
            Carrello
            <BiCart size="2rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  color: PropType.string,
  searchEnabled: PropType.bool,
};

export default Header;
