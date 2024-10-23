import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useProduct = create(
  persist((set) => ({
    products: [
      {
        id: 123,
        productName: "Laptop",
        productCategory: "electronic",
        productImage:
          "https://i.pinimg.com/enabled_lo/564x/d0/70/07/d070075c1d5b8d094d43a36ea431d44c.jpg",
        productFreshness: "Brand New",
        productDescription: "test Product Description",
        productPrice: 123,
      },
    ],
    addProduct: (newProduct) =>
      set((state) => ({
        products: [...state.products, newProduct],
      })),
    deleteProduct: (id) =>
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
      })),
    updateProduct: (id, updatedProduct) =>
      set((state) => ({
        products: state.products.map((product) =>
          product.id == id ? updatedProduct : product
        ),
      })),
  }), 
  {
    name: "product-store",
    storage: createJSONStorage(() => localStorage),
  }
  )
);

export default useProduct;
