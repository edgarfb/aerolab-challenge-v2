import { createContext, useContext, useReducer } from "react";
import { productsMock } from "../fake-data/products-mock";

const ProductsContext = createContext(null);
const ProductsDispatchContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, dispatch] = useReducer(productsReducer, productsMock);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsDispatchContext.Provider value={dispatch}>
        {children}
      </ProductsDispatchContext.Provider>
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  return useContext(ProductsContext);
}
export function useProductsDispatchContext() {
  return useContext(ProductsDispatchContext);
}

function productsReducer(state, action) {
  switch (action.type) {
    case "MOST_RECENT": {
      return productsMock;
    }
    case "LOWER_PRICE": {
      return [...state].sort((a, b) => a.cost - b.cost);
    }
    case "HIGHEST_PRICE": {
      return [...state].sort((a, b) => b.cost - a.cost);
    }
    default: {
      return state;
    }
  }
}
