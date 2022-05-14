import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./../images/WooCommerce_logo.svg.png";
import { BsFillCartCheckFill } from "react-icons/bs";

export default function Header() {
  return (
    <div>
      <div className="header">
        <nav
          className="nav"
        >
          <div className="logo">
            <img src={Logo} />
          </div>
          <div className="menu">
            <Link className="menu-link" to="/cart-page">Cart</Link>
            <Link className="menu-link" to="/contact">Contact</Link>
          </div>
          <div className="control">
            <div className="cart-icon">
              <BsFillCartCheckFill />
            </div>
            <button className="btn-login app-btn">LOGIN</button>
            <button className="btn-register app-btn">REGISTER</button>
          </div>
        </nav>
      </div>
    </div>
  );
}
