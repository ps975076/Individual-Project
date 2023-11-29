import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import HeaderNavBar from "./Components/HeaderNavBar";
import MainContent from "./Components/MainContent";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./Pages/DetailsPage";
import { ProductsProvider } from "./ContextAPI/ProductsProvider";

function App() {
  return (
    <ProductsProvider>
      <div className="container">
        <BrowserRouter>
          <HeaderNavBar />

          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ProductsProvider>
  );
}

export default App;
