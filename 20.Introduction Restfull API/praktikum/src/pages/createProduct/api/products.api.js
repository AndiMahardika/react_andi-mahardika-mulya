/* eslint-disable no-unused-vars */
import axios from "axios";
import useProduct from "../../../stores/productStore.js";

export async function getProducts() {
  try {
    const response = await axios.get(
      "https://6720ab2e98bbb4d93ca56da5.mockapi.io/products"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createProduct(newProduct) {
  const refreshProducts = useProduct.getState().refreshProducts;

  try {
    const response = await axios.post(
      "https://6720ab2e98bbb4d93ca56da5.mockapi.io/products",
      newProduct
    );
    const newProducts = await getProducts();
    // useProduct.getState().refreshProducts(newProducts);
    refreshProducts(newProducts);
  } catch (error) {
    console.log(error);
  }
}

export const deleteProduct = async (id) => {
  const refreshProducts = useProduct.getState().refreshProducts;

  const confirmDelete = confirm(
    "Are you sure you want to delete this product?"
  );
  if (!confirmDelete) return;

  try {
    const response = await axios.delete(
      `https://6720ab2e98bbb4d93ca56da5.mockapi.io/products/${id}`
    );
    const data = await getProducts();
    alert("Product success delete")
    refreshProducts(data);
  } catch (error) {
    console.log(error);
  }
};

export async function updateProduct(id, updatedProduct) {
  // console.log(id)
  // console.log(updatedProduct)

  const refreshProducts = useProduct.getState().refreshProducts;

  try {
    const response = await axios.put(
      `https://6720ab2e98bbb4d93ca56da5.mockapi.io/products/${id}`,
      updatedProduct
    );
    const data = await getProducts();
    refreshProducts(data);
  } catch (error) {
    console.log(error);
  }
}

export async function uploadImage(imageFile) {
  const cloudinaryData = new FormData();
  cloudinaryData.append("file", imageFile);
  cloudinaryData.append("upload_preset", "ml_default");
  const CLOUD_NAME = "dxkcawyw6";

  let productImageURL = "";

  try {
    const cloudinaryResponse = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      cloudinaryData
    );
    productImageURL = cloudinaryResponse.data.secure_url;
    return productImageURL;
  } catch (error) {
    return;
  }
}
