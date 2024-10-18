import { Link, useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar.jsx";
import { useEffect, useState } from "react";

export default function DetailComponent() {
  const { id } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const product = products.find(product => product.id === id)

  return (
    <>
      <Navbar />
      <div>
        {product ? (
          <div className="container mx-auto mt-5 pt-5 d-flex flex-column justify-content-center align-items-center gap-4">
            <h2>Product Detail</h2>
            <div className="d-flex border border-primary w-50 align-items-center p-3 gap-3">
              <img src="https://i.pinimg.com/enabled_lo/564x/61/0e/f8/610ef8d775aae1e0b1a63c224b2be526.jpg" alt="" className="img-fluid" style={{width: "200px"}}/>
              <div>
                <p>Name : {product.name}</p>
                <p>Category: {product.category}</p> 
                <p>Freshness: {product.freshness}</p>
                <p>Price: ${product.price}</p>
              </div>
            </div>
            <Link className="btn btn-primary" to="/product" role="button">Back</Link>
          </div>
        ) : (
          <div className="container mx-auto mt-5 pt-5 d-flex flex-column justify-content-center align-items-center gap-4">
            <h1>Product not found.</h1>
          </div>
        )}
      </div>
    </>
  )
}
