// import { useState } from "react";
import "./App.css";
import Footer from "./Pages/Components/Footer";
import HeaderNavBar from "./Pages/Components/HeaderNavBar";
import MainContent from "./Pages/Components/MainContent";

function App() {
  // 1. Create state for products
  // const [products, setProducts] = useState([]);

  return (
    <>
      <div className="container">
        <HeaderNavBar />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
