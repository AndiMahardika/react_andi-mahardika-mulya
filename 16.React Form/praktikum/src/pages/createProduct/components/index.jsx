import Navbar from "../../../components/navbar/navbar";
import ListProduct from "./listProduct";
import { useEffect, useState } from "react";
import Hero from "../../../components/hero";
import article from "../article.js";
import FormProduct from "./formProduct.jsx";
import { generateUUID, validateProductCategory, validateProductFreshness, validateProductImage, validateProductName, validateProductPrice } from "../utils/utils.js";

export default function CreateProduct() {
  const [products, setProducts] = useState([])

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
    const price = formData.get("productPrice");

    console.log(imageFile)

    // validation
    if (!validateProductName(name)) {
      alert("Product name must be between 3 to 10 characters long and contain only letters and spaces.");
      return;
    }

    if (!validateProductCategory(category)) {
      alert("Please select a valid product category.");
      return;
    }

    if (!validateProductFreshness(freshness)) {
      alert("Please select a valid product freshness option.");
      return;
    }

    if (!validateProductPrice(price)) {
      alert("Price must be a valid positive number.");
      return;
    }

    if(!validateProductImage(imageFile)){
      alert("Please upload a valid image file (JPG, JPEG, or PNG).");
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
      price
    }

    setProducts([...products, newProduct])
    localStorage.setItem("products", JSON.stringify([...products, newProduct]))

    e.target.reset();
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
          <FormProduct handleSubmit={handleSubmit}/>
        </div>
        <ListProduct products={products} onDelete={handleDeleteProduct}/>
      </main>
    </>
  )
}