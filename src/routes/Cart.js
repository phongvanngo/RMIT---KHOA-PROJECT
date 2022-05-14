import React from "react";
import "./Cart.css";

import Product from "./../images/Slub-Cotton-Short-Sleeve-Henley.webp";

export default function CartPage() {
  return (
    <div>
      <div className="body-container">
        <h1>NO MORE LOOSE FIT CLOTHES</h1>
        <div
          style={{
            width: "100%",
          }}
        >
          <div className="main-container">
            <div className="mainn-section">
              <div className="product-form">
                <div className="wishlist">

                <button className="btn-wishlist">WISHLIST(0)</button>
                </div>
                <div className="product-image">
                  <img src={Product} />
                </div>

              </div>
              <div className="product-list">
                <div className="product-item">
                  <p>Color: Black And White</p>
                </div>
                <div className="product-item">
                  <p>Size: M</p>
                </div>
                <br />
                <br />
                <br />
                <div className="product-item">
                  <p>Price: 500.000 VND</p>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="product-item">
                  <p>Delete</p>
                </div>
              </div>
            </div>
            <div className="checkout-section">
              <div>
                <p>Total: 500.000 VND</p>
                <p>Including VAT%</p>
              </div>
              <div>
                <button className="btn-continue">CONTINUE</button>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}
