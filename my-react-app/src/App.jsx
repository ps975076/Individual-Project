// import { useState } from "react";
import { useEffect } from "react";
import React, { useState } from "react";
import "./App.css";
import Footer from "./Pages/Components/Footer";
import HeaderNavBar from "./Pages/Components/HeaderNavBar";
import MainContent from "./Pages/Components/MainContent";

function App() {
  // 1. Create state for products
  const [products, setProducts] = useState([]);

  // 3. useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // 2. Fetch the product
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setProducts(data);
      });
  };

  return (
    <>
      <div className="container">
        <HeaderNavBar />
        <MainContent products={products} />
        <Footer />
      </div>
    </>
  );
}

export default App;
