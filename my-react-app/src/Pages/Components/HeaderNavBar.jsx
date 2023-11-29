function HeaderNavBar() {
  return (
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
  );
}

export default HeaderNavBar;
