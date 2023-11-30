import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../ContextAPI/ProductsProvider";

function MainContent() {
  const { products, addToCart } = useContext(ProductsContext);

  return (
    <main className="main">
      <div className="empty-left-col"></div>
      <div className="main-content-col">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <Link to={"/details/" + product.id} className="product-img">
              <img src={product.image} />
            </Link>
            <div className="product-info">
              <p>{product.title}</p>
              <p>Price: £{product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Bag</button>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <h1 className="no-cart-product">No product</h1>
        )}
      </div>
      <div className="empty-right-col"></div>
    </main>
  );
}

export default MainContent;
