// import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="menu-container">
            <div className="empty"></div>
            <div className="find">
              <p>Find a Store | </p>
            </div>
            <div className="help">
              <p>Help | </p>
            </div>
            <div className="join">
              <p>Join Us | </p>
            </div>
            <div className="signin">
              <p>Sign In </p>
            </div>
          </div>
          <nav className="navBar-container"></nav>
        </header>
        <main className="main">main</main>
        <footer className="footer">footer</footer>
      </div>

      {/* <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png"
        alt="logo"
      /> */}
    </>
  );
}

export default App;
