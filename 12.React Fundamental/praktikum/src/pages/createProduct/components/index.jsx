import Input from "../../../components/input/input";
import Navbar from "../../../components/navbar/navbar";
import Select from "../../../components/select/select";
import Radio from "../../../components/radio/radio";
import Textarea from "../../../components/textarea/textarea";
import Button from "../../../components/button/button";
import ListProduct from "./listProduct";
import Logo from "../../../assets/logo.png";
import { useState } from "react";

const freshness = [{
    label: "Brand New",
    value: "brand-new"
  },
  {
    label: "Second Hank",
    value: "second-hank"
  },
  {
    label: "Refurbished",
    value: "refurbished"
  }
]

const productCategory = ["clothes", "electronic", "food"]
export default function CreateProduct() {
  
  const [products, setProducts] = useState([])
  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    const newProduct = {
      id: generateId(),
      name: formData.get("productName"),
      category: formData.get("productCategory"),
      image: formData.get("imageProduct"),
      freshness: formData.get("productFreshness"),
      description: formData.get("description"),
      price: formData.get("productPrice")
    }

    setProducts([...products, newProduct])
  }

  function generateId() {
    return new Date().getTime()
  }

  return (
    <>
      <Navbar/>
      <main>
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-9 py-5 text-center mx-auto">
              <img src={Logo} alt="logo" className="img-thumbnail" width="80" />
              <h2 className="mt-4 mb-2">Create Product</h2>
              <p>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="row needs-validation" id="createProductForm" noValidate encType="multipart/form-data">
            <div className="col-lg-7 mx-auto">
              <h3>Detail Product</h3>
              <Input label="Product Name" placeholder="Product Name" type="text" id="productName" col="6" />
              <Select caption="Product Category" options={productCategory} id="productCategory" />
              <div className="mb-4 col-md-4 col-7">
                <label htmlFor="imageProduct" className="form-label">Image Of Product</label>
                <input className="form-control form-control-sm" type="file" id="imageProduct" required />
                <div className="valid-feedback">
                  Looks good!
                </div>
                <div className="invalid-feedback">
                  Please select a image.
                </div>
              </div>
              <Radio label="Product Freshness" options={freshness} name="productFreshness" />
              <Textarea label="Additional Description" placeholder="Additional Description" id="description" row="3" />
              <Input label="Product Price" placeholder="$ 1" type="number" id="productPrice" col="12" />
              <div className="d-grid gap-2 px-4 mb-3">
                <Button type="submit" color="primary">Submit</Button>
              </div>
            </div>
          </form>
        </div>
        <ListProduct dataProducts={products} />
      </main>
    </>
  )
}