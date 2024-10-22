/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import useProduct from "../../../stores/productStore.js";
import FormUpdateProduct from "./formUpdateProduct.jsx";
import { validateProductCategory, validateProductImage, validateProductName, validateProductPrice } from "../utils/utils.js";

// export default function ListProduct({products, onDelete}) {
export default function ListProduct() {
  // zustand
  const products = useProduct((state) => state.products)
  const deleteProduct = useProduct((state) => state.deleteProduct)
  const updateProduct = useProduct((state) => state.updateProduct)

  // state
  const [search, setSearch] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [product, setProduct] = useState(null);

  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  function searchProduct() {
    setShowAlert(true)
    if(search === "") {
      setProduct(null)
    } else {
      const foundProduct = products.find(product => product.productName.toLowerCase() === search.toLowerCase());
      setProduct(foundProduct) 
    }
  }

  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if(!confirmDelete) return
    deleteProduct(id)
  }

  async function handleUpdate(e) {
    e.preventDefault()
    const formData = new FormData(e.target)

    const id = formData.get("id")
    const productName = formData.get("productName");
    const productCategory = formData.get("productCategory");
    const imageFile = formData.get("productImage");
    const productFreshness = formData.get("productFreshnessUpdate");
    const productDescription = formData.get("additionalDescription")
    const productPrice = formData.get("productPrice");

    let newErrors = {
      productName: "",
      productCategory: "",
      productImage: "",
      productFreshness: "",
      productPrice: "",
    };

    // validation
    let isValid = true;
    if (!validateProductName(productName)) {
      newErrors.productName = "Product name must be 3-10 characters long and contain only letters and numbers.";
      isValid = false;
    }

    if (!validateProductCategory(productCategory)) {
      newErrors.productCategory = "Please select a valid product category.";
      isValid = false;
    }

    if (!validateProductPrice(productPrice)) {
      newErrors.productPrice = "Price must be a valid positive number.";
      isValid = false;
    }

    let productImage = product.productImage; 
    if (imageFile.name !== "") {
      if (!validateProductImage(imageFile.name)) {
        newErrors.productImage = "Please upload a valid image file (JPG, JPEG, or PNG).";
        isValid = false;
      }

      productImage = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(imageFile);
      });
    }

    setErrors(newErrors);
    setIsValid(isValid);

    if(!isValid) {
      alert("Product update failed! Please check your input and try again.")
      return;
    }
    
    const updatedProduct = {
      id,
      productName,
      productCategory,
      productImage,
      productFreshness,
      productDescription,
      productPrice
    }

    updateProduct(id, updatedProduct)

    alert("Product updated successfully!")

    e.target.reset();
    setErrors({});
  }

  return (
    <div className="container-fluid">
      {showAlert && (
        <div className="row px-2" id="searchAlert">
        {product ? (
          <div className="alert alert-success alert-dismissible fade show col-md-9 col-lg-5 col-10 mx-auto" role="alert">
          <h5 className="text-center">Product Found</h5>
          <hr />
          <div className="d-md-flex align-items-center justify-content-evenly gap-3">
            <div>
              <img src={product.productImage} alt="" className="" style={{width: "200px"}} />
            </div>
            <div>
              <strong>Product Name:</strong> {product.productName} <br />
              <strong>Product Category:</strong> {product.productCategory} <br />
              <strong>Product Freshness:</strong> {product.productFreshness} <br />
              <strong>Product Price:</strong> $ {product.productPrice} <br />
            </div>
          </div>
          <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowAlert(false)}></button>
        </div>
        ) : (
          <div className="alert alert-danger alert-dismissible fade show col-md-9 col-lg-6 col-12 mx-auto" role="alert">
            <strong>Product not found</strong>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowAlert(false)}></button>
          </div>
        )}
      </div>
      )}

      <h2 className="text-center">List of Products</h2>
      <div className="row overflow-auto mb-2 mx-auto">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Image</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Description</th>
                <th scope="col">Product Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody id="tableProduct">
              {products && products.map((product) => (
                <tr className="align-middle" key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  <td>
                    <img src={product.productImage} alt="" className="rounded" style={{width: "200px"}} />
                  </td>
                  <td>{product.productFreshness}</td>
                  <td>{product.productDescription}</td>
                  <td>${product.productPrice}</td>
                  <td>
                    <Link to={`/product/detail/${product.id}`} className="btn btn-md btn-primary">
                      Detail
                    </Link>
                    <button className="btn btn-md btn-danger mx-2" onClick={() => handleDelete(product.id)}>Delete</button>
                    <button type="button" className="btn btn-md btn-success" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => setProduct(product)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-2 col-md-4 col-7">
          <input 
            type="text" 
            className="form-control form-control-sm" 
            placeholder="Search by Product Name" 
            id="inputSearch" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="btn-group pb-5" role="group" aria-label="Basic example">
            <button 
              type="button" 
              className="btn btn-outline-primary btn-sm" 
              id="btnSearch"
              onClick={searchProduct}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Edit Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {product && <FormUpdateProduct product={product} handleUpdate={handleUpdate} errors={errors} />}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
