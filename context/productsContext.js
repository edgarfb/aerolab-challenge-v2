import { createContext, useContext } from "react";

const ProductsContext = createContext(null);

export function ProductsContextProvider({ children, value }) {
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  return useContext(ProductsContext);
}
