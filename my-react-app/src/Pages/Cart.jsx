import { useContext, useEffect, useState } from "react";
import ProductsContext from "../ContextAPI/ProductsProvider";

function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeItem } =
    useContext(ProductsContext);

  return (
    <main className="main">
      <div className="empty-left-col"></div>
      <div>
        {cartItems.map((p) => (
          <div key={p.id} className="cart-con">
            <div className="cart-product-img">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="cart-product-info">
              <h3>{p.title}</h3>
              <p>Unit Price: ${p.price}</p>
              <div className="counter">
                <button className="count-btn" onClick={() => decreaseQty(p)}>
                  -
                </button>
                <input
                  type="text"
                  value={p.qty}
                  onChange={() => {}}
                  className="qty"
                />
                <button className="count-btn" onClick={() => increaseQty(p)}>
                  +
                </button>
              </div>
            </div>
            <div className="cart-product-action">
              <p>Price: ${p.price * p.qty}</p>
              <button onClick={() => removeItem(p)}>Remove</button>
            </div>
          </div>
        ))}
        {cartItems.length === 0 ? (
          <h1 className="no-cart-items">No cart items</h1>
        ) : (
          ""
        )}
        <div className="total-price">
          <h2>
            Total: $
            {cartItems
              .reduce((t, item) => t + item.price * item.qty, 0)
              .toFixed(2)}
          </h2>
        </div>
      </div>
      <div className="empty-right-col"></div>
    </main>
  );
}

export default Cart;
