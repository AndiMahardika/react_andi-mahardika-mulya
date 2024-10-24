/* eslint-disable no-unused-vars */
import Navbar from "../../../components/navbar/navbar";
import ListProduct from "./listProduct";
import Hero from "../../../components/hero";
import article from "../article.js";
import FormProduct from "./formProduct.jsx";
import { generateUUID, validateProductCategory, validateProductFreshness, validateProductImage, validateProductName, validateProductPrice } from "../utils/utils.js";
import { useState } from "react";
import useProduct from "../../../stores/productStore.js";

export default function CreateProduct() {
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  const addProduct = useProduct((state) => state.addProduct)

  async function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    const productName = formData.get("productName");
    const productCategory = formData.get("productCategory");
    const imageFile = formData.get("productImage");
    const productFreshness = formData.get("productFreshness");
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
      newErrors.productName = "Product name must be 3-25 characters long and contain only letters and numbers";
      isValid = false;
    }

    if (!validateProductCategory(productCategory)) {
      newErrors.productCategory = "Please select a product category.";
      isValid = false;
    }

    if (!validateProductFreshness(productFreshness)) {
      newErrors.productFreshness = "Please select a valid product freshness option.";
      isValid = false;
    }

    if (!validateProductPrice(productPrice)) {
      newErrors.productPrice = "Price must be a valid positive number.";
      isValid = false;
    }

    if (!validateProductImage(imageFile.name)) {
      newErrors.productImage = "Please upload a valid image file (JPG, JPEG, or PNG).";
      isValid = false;
    }

    setErrors(newErrors);
    setIsValid(isValid);

    if(!isValid) {
      console.log("!isValid", isValid)
      return;
    }

    const image = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(imageFile);
    });

    const newProduct = {
      id: generateUUID(),
      productName,
      productCategory,
      productImage: image,
      productFreshness,
      productDescription,
      productPrice,
    }

    addProduct(newProduct)

    e.target.reset();
    setErrors({});
  }
  
  return (
    <>
      <Navbar/>
      <main>
        <div className="container">
          <Hero article={article} />
          <FormProduct handleSubmit={handleSubmit} errors={errors}/>
        </div>
        <ListProduct/>
      </main>
    </>
  )
}