import Navbar from "../../../components/navbar/navbar";
import ListProduct from "./listProduct";
import { useEffect, useState } from "react";
import Hero from "../../../components/hero";
import article from "../article.js";
import FormProduct from "./formProduct.jsx";
import { generateUUID, validateProductCategory, validateProductFreshness, validateProductImage, validateProductName, validateProductPrice } from "../utils/utils.js";

export default function CreateProduct() {
  const [products, setProducts] = useState([])
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    const name = formData.get("productName");
    const category = formData.get("productCategory");
    const imageFile = formData.get("productImage");
    const freshness = formData.get("productFreshness");
    const description = formData.get("additionalDescription")
    const price = formData.get("productPrice");

    let newErrors = {
      productName: "",
      productCategory: "",
      productImage: "",
      productFreshness: "",
      productPrice: "",
    };
  
    // validation
    let isValid = true;
    if (!validateProductName(name)) {
      newErrors.productName = "Product name must be 3-10 characters long and contain only letters and numbers.";
      isValid = false;
    }

    if (!validateProductCategory(category)) {
      newErrors.productCategory = "Please select a valid product category.";
      isValid = false;
    }

    if (!validateProductFreshness(freshness)) {
      newErrors.productFreshness = "Please select a valid product freshness option.";
      isValid = false;
    }

    if (!validateProductPrice(price)) {
      newErrors.productPrice = "Price must be a valid positive number.";
      isValid = false;
    }

    console.log(imageFile.name)
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
      name,
      category,
      image,
      freshness,
      description,
      price
    }

    console.log(products)
    setProducts([...products, newProduct])
    localStorage.setItem("products", JSON.stringify([...products, newProduct]))

    e.target.reset();
    setErrors({});
  }

  function handleDeleteProduct(id) {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    }
  }
  
  return (
    <>
      <Navbar/>
      <main>
        <div className="container">
          <Hero article={article} />
          <FormProduct handleSubmit={handleSubmit} errors={errors}/>
        </div>
        <ListProduct products={products} onDelete={handleDeleteProduct}/>
      </main>
    </>
  )
}