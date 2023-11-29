import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCartItems(data);
      });
  };

  return (
    <main className="main">
      <div className="empty-left-col"></div>
      <div className="main-content-col">
        <h1>Cart section</h1>
      </div>
      <div className="empty-right-col"></div>
    </main>
  );
}

export default Cart;
