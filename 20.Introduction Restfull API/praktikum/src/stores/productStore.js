import { create } from "zustand";

const useProduct = create( (set) => ({
    products: [],
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
    refreshProducts: (newProducts) => set({ products: newProducts }),
}));

export default useProduct;
