import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsContext from "../ContextAPI/ProductsProvider";

function DetailsPage() {
  const { addToCart } = useContext(ProductsContext);
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductDetails(data);
      });
  };

  return (
    <main className="main">
      <div className="empty-left-col"></div>
      <div className="main-content-col">
        <div className="productDetails">
          <div className="productDet-img">
            <img src={productDetails.image} />
          </div>
          <div className="productDet-info">
            <h1>{productDetails.title}</h1>
            <p>Description: {productDetails.description}</p>
            <p>Price: ${productDetails.price}</p>

            <button onClick={() => addToCart(productDetails)}>
              Add to Bag
            </button>
          </div>
        </div>
      </div>
      <div className="empty-right-col"></div>
    </main>
  );
}

export default DetailsPage;
