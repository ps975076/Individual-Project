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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png"
                alt="logo"
              />
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
        <main className="main">main</main>
        {/* FOOTER */}
        <footer className="footer">footer</footer>
      </div>
    </>
  );
}

export default App;
