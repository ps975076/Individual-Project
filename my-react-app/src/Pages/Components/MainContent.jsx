import React from "react";

function MainContent({ products }) {
  return (
    <main className="main">
      <div className="empty-left-col"></div>
      <div className="main-content-col">
        <div className="product">
          <div className="product-img">IMG</div>
          <div className="product-des">Title-DES</div>
          <div className="product-price">
            PRICE
            <div className="addToCartBtn">
              <button>Add to Bag</button>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="product-img">IMG</div>
          <div className="product-des"></div>
          <div className="product-price">PRICE</div>
        </div>
        <div className="product">
          <div className="product-img">IMG</div>
          <div className="product-des"></div>
          <div className="product-price"></div>
        </div>
        <div className="product">
          <div className="product-img"></div>
          <div className="product-des"></div>
          <div className="product-price"></div>
        </div>
        <div className="product">
          <div className="product-img"></div>
          <div className="product-des"></div>
          <div className="product-price"></div>
        </div>
        <div className="product">
          <div className="product-img"></div>
          <div className="product-des"></div>
          <div className="product-price"></div>
        </div>
        <div className="product">
          <div className="product-img"></div>
          <div className="product-des"></div>
          <div className="product-price"></div>
        </div>
        <div className="product">
          <div className="product-img"></div>
          <div className="product-des">DES</div>
          <div className="product-price"></div>
        </div>
        <div className="product">
          <div className="product-img"></div>
          <div className="product-des">DES</div>
          <div className="product-price"></div>
        </div>
      </div>
      <div className="empty-right-col"></div>
    </main>
  );
}

export default MainContent;

//   {
//     products.map((product, index) => (
//       <div className="product" key={index}>
//         <div className="product-img">{product.image}</div>
//         <div className="product-des">{product.title}</div>
//         <div className="product-price">
//           <div className="addToCartBtn">
//             <button>Add to Bag</button>
//           </div>
//         </div>
//       </div>
//     ));
//   }
