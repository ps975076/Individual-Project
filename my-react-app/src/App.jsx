// import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        {/* HEADER */}
        <header className="header">
          <div className="menu-container">
            <div className="empty"></div>
            <div className="find">
              <p>Find a Store &#160; | </p>
            </div>
            <div className="help">
              <p>Help &#160; | </p>
            </div>
            <div className="join">
              <p>Join Us &#160; | </p>
            </div>
            <div className="signin">
              <p>Sign In &#160; &#160; &#160;</p>
            </div>
          </div>
          <nav className="navBar-container">
            <div className="logo">
              <img src="/src/assets/logo.png" alt="logo" />
            </div>
            <div className="navigation">
              <div className="men">
                <p>Men</p>
              </div>
              <div className="women">
                <p>Women</p>
              </div>
              <div className="kids">
                <p>Kids</p>
              </div>
              <div className="sale">
                <p>Sale</p>
              </div>
            </div>
            <div className="searchBar">
              <input className="searchInput" type="text" placeholder="Search" />
            </div>
            <div className="favs">
              <img src="/src/assets/heart-svgrepo-com (3).svg" alt="favs" />
            </div>
            <div className="cart">
              <img src="/src/assets/shopping-bag-svgrepo-com.svg" alt="" />
            </div>
          </nav>
        </header>
        {/* MAIN */}
        <main className="main">
          <div className="empty-left-col">EMPTY</div>
          <div className="main-content-col">
            <div className="product">
              <div className="product-img">IMG</div>
              <div className="product-des">DES</div>
              <div className="product-price">PRICE</div>
            </div>
            <div className="product">
              <div className="product-img">IMG</div>
              <div className="product-des">DES</div>
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
          </div>
          <div className="empty-right-col">EMPTY</div>
        </main>
        {/* FOOTER */}
        <footer className="footer">footer</footer>
      </div>
    </>
  );
}

export default App;
