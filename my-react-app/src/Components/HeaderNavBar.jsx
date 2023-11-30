import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../ContextAPI/ProductsProvider";

function HeaderNavBar() {
  const { cartItems, search } = useContext(ProductsContext);

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
        <Link to="/" className="logo">
          <img src="/src/assets/logo.png" alt="logo" />
        </Link>
        <div className="navigation">
          <div className="men">
            <p>Men</p>
          </div>
          <div className="women">
            <p>Women</p>
          </div>
          <div className="kids">
            <p>Electronics</p>
          </div>
          <div className="sale">
            <p>Jewellery</p>
          </div>
        </div>
        <div className="searchBar">
          <input
            className="searchInput"
            type="text"
            placeholder="Search"
            onChange={(e) => search(e.target.value.trim().toLowerCase())}
          />
        </div>
        <div className="favs">
          <img src="/src/assets/heart-svgrepo-com (3).svg" alt="favs" />
        </div>
        <Link to="/cart" className="cart">
          <p>{cartItems.length}</p>
          <img src="/src/assets/shopping-bag-svgrepo-com.svg" alt="" />
        </Link>
      </nav>
    </header>
  );
}

export default HeaderNavBar;
