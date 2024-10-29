/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

export default function DetailComponent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProductById(id);
  }, [id]);

  async function getProductById(id) {
    try {
      setLoading(true);
      setError(""); 
      const response = await axios.get(`https://6720ab2e98bbb4d93ca56da5.mockapi.io/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      setError("Product not found");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-5 pt-5 d-flex flex-column justify-content-center align-items-center gap-4">
        {loading && <h1>Loading...</h1>}
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        {product && (
          <>
            <h2>Product Detail</h2>
            <div className="d-flex border border-primary w-50 align-items-center p-3 gap-3">
              <img src={product.productImage} alt="" style={{ width: "200px" }} />
              <div>
                <p>Name: {product.productName}</p>
                <p>Category: {product.productCategory}</p>
                <p>Freshness: {product.productFreshness}</p>
                <p>Price: ${product.productPrice}</p>
              </div>
            </div>
            <Link className="btn btn-primary" to="/product" role="button">Back</Link>
          </>
        )}
      </div>
    </>
  );
}
