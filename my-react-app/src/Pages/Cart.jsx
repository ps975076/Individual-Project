import { useContext, useEffect, useState } from "react";
import ProductsContext from "../ContextAPI/ProductsProvider";

function Cart() {
  const { cartItems } = useContext(ProductsContext);
  return (
    <main className="main">
      <div className="empty-left-col"></div>
      <div>
        {cartItems.map((p) => (
          <div className="cart-con">
            <div className="cart-product-img">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="cart-product-info">
              <h3>{p.title}</h3>
              <p>${p.price}</p>
              <div class="counter">
                <button
                  className="count-btn"
                  onClick="decreaseCount(event, this)"
                >
                  -
                </button>
                <input type="text" value="1" className="qty" />
                <button
                  className="count-btn"
                  onClick="increaseCount(event, this)"
                >
                  +
                </button>
              </div>
            </div>
            <div className="cart-product-qty">
              <button>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="empty-right-col"></div>
    </main>
  );
}

export default Cart;
