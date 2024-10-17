import { useState } from "react";

export default function ListProduct(props) {
  const { dataProducts, onDelete } = props;
  const [search, setSearch] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [product, setProduct] = useState(null);

  function searchProduct() {
    setShowAlert(true)
    if(search === "") {
      setProduct(null)
    } else {
      const foundProduct = dataProducts.find(product => product.name.toLowerCase() === search.toLowerCase());
      setProduct(foundProduct) 
    }
  }
  
  return (
    <div className="container-fluid">
      {showAlert && (
        <div className="row px-2" id="searchAlert">
        {product ? (
          <div className="alert alert-success alert-dismissible fade show col-md-9 col-lg-4 col-10 mx-auto" role="alert">
          <h5 className="text-center">Product Found</h5>
          <hr />
          <div className="d-md-flex align-items-center justify-content-evenly">
            <div>
              <strong>Product Name:</strong> {product.name} <br />
              <strong>Product Category:</strong> {product.category} <br />
              <strong>Product Freshness:</strong> {product.freshness} <br />
              <strong>Product Price:</strong> $ {product.price} <br />
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
      <div className="row overflow-auto mb-2">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody id="tableProduct">
              {dataProducts && dataProducts.map((product, index) => (
                <tr className="align-middle" key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.freshness}</td>
                  <td>${product.price}</td>
                  <td>
                    <button className="btn btn-md btn-danger" onClick={() => onDelete(product.id)}>Delete</button>
                    <button className="btn btn-md btn-success">Edit</button>
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
    </div>
  );
}
