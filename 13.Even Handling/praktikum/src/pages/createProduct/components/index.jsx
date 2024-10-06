import Input from "../../../components/input/input";
import Navbar from "../../../components/navbar/navbar";
import Select from "../../../components/select/select";
import Radio from "../../../components/radio/radio";
import Textarea from "../../../components/textarea/textarea";
import Button from "../../../components/button/button";
import ListProduct from "./listProduct";
import { useState } from "react";
import Hero from "../../../components/hero";
import article from "./article";

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
  const [productName, setProductName] = useState("")
  const [language, setLanguage] = useState("en")

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

  function randomNumber() {
    console.log(Math.random())
  }

  const handleValidationProductName = (e) => {
    const productNameValue = e.target.value;
    setProductName(productNameValue);

    if(!productNameValue) {
      alert("Please enter a valid product name.")
    }

    if(productNameValue.length > 25) {
      alert("Last Name must not exceed 25 characters.")
    }

    if(productNameValue.length > 10) {
      alert("Last Name must not exceed 10 characters.")
    }
  }

  const handleChangeText = () => {
    setLanguage(language === "en" ? "id" : "en")
  }

  const handleDeleteProduct = () => {
    const confirmDelete = confirm("Are you sure you want to delete last product?")
    if(confirmDelete && products.length > 0) {
      setProducts(products.slice(0, -1))
    }
    return false
  }
  
  return (
    <>
      <Navbar/>
      <main>
        <div className="container">
          <Hero article={article} language={language} />

          <div className="mx-auto text-center d-flex justify-content-center gap-3">
            <Button type="button" color="primary" onClick={randomNumber} >Random Number</Button>
            <Button type="button" color="primary" onClick={handleChangeText} >change text</Button>
          </div>

          <form onSubmit={handleSubmit} className="row needs-validation" id="createProductForm" encType="multipart/form-data">
            <div className="col-lg-7 mx-auto">
              <h3>Detail Product</h3>
              <Input label="Product Name" placeholder="Product Name" type="text" id="productName" col="6" onChange={handleValidationProductName} />
              <Select caption="Product Category" options={productCategory} id="productCategory" />
              <div className="mb-4 col-md-4 col-7">
                <label htmlFor="imageProduct" className="form-label">Image Of Product</label>
                <input className="form-control form-control-sm" type="file" id="imageProduct" />
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
        <ListProduct dataProducts={products} onDelete={handleDeleteProduct}/>
      </main>
    </>
  )
}