import { Link, useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar.jsx";
import useProduct from "../../../stores/productStore.js";

export default function DetailComponent() {
  const { id } = useParams()
  const products = useProduct((state) => state.products)

  const product = products.find(product => product.id == id)

  return (
    <>
      <Navbar />
      <div>
        {product ? (
          <div className="container mx-auto mt-5 pt-5 d-flex flex-column justify-content-center align-items-center gap-4">
            <h2>Product Detail</h2>
            <div className="d-flex border border-primary w-50 align-items-center p-3 gap-3">
              <img src={product.productImage} alt="" style={{width: "200px"}} />
              <div>
                <p>Name : {product.productName}</p>
                <p>Category: {product.productCategory}</p> 
                <p>Freshness: {product.productFreshness}</p>
                <p>Price: ${product.productPrice}</p>
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
