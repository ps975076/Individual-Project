import React from "react";
import { Link } from "react-router-dom";

function MainContent({ products }) {
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
              <p>Price: ${product.price}</p>
              <button>Add to Bag</button>
            </div>
          </div>
        ))}
      </div>
      <div className="empty-right-col"></div>
    </main>
  );
}

export default MainContent;
