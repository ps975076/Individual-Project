import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  // 1. Create state for products
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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
      });
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <ProductsContext.Provider value={{ products, cartItems, addToCart }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
export { ProductsProvider };
