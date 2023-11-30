import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  // 1. Create state for products
  const [totalProducts, setTotalProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const goTo = useNavigate();

  // 3. useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // 2. Fetch the product
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        //console.log("data", data);
        setProducts(data);
        setTotalProducts(data);
      });
  };

  const addToCart = (product) => {
    if (product.id) {
      const items = [...cartItems];
      const existingProduct = items.find((p) => p.id === product.id);
      // if product is already in cart
      if (existingProduct) {
        // take me to cart page
        goTo("/cart");
      } else {
        // else add product to cart
        // add qty:1, to product
        product.qty = 1;
        setCartItems([...cartItems, product]);
      }
    }
  };

  // Increase Qty
  const increaseQty = (item) => {
    const items = [...cartItems];
    const updatedItems = items.map((p) => {
      if (item.id === p.id) {
        p.qty++;
      }
      return p;
    });
    setCartItems(updatedItems);
  };

  //Decrease Qty
  const decreaseQty = (item) => {
    const items = [...cartItems];
    // more than one, then decrease qty
    const updatedItems = items.map((p) => {
      if (item.id === p.id) {
        // if p.qty <= 1 then remove it
        if (p.qty <= 1) {
          // remove
          return null;
        } else {
          // else redue it
          p.qty--;
        }
      }
      return p;
    });

    // remove null products
    const newItems = updatedItems.filter((item) => item !== null);

    setCartItems(newItems);
  };
  // less than 1, then remove

  const removeItem = (item) => {
    const updatedItems = cartItems.filter((p) => p.id !== item.id);
    setCartItems(updatedItems);
  };

  // search item
  const search = (text) => {
    const items = [...totalProducts];
    const searchResult = items.filter(
      (p) =>
        p.title.toLowerCase().includes(text) ||
        p.description.toLowerCase().includes(text)
    );

    // if(searchResult.length)
    setProducts(searchResult);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        search,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
export { ProductsProvider };
