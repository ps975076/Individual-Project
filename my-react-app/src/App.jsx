// import { useState } from "react";
import { useEffect } from "react";
import React, { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import HeaderNavBar from "./Components/HeaderNavBar";
import MainContent from "./Components/MainContent";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./Pages/DetailsPage";

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
    <div className="container">
      <BrowserRouter>
        <HeaderNavBar />

        <Routes>
          <Route path="/" element={<MainContent products={products} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
