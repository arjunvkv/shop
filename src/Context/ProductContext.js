import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../Api/ProductApi";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await (await getAllProducts()).json();
      setProducts(allProducts);
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {children}
    </ProductContext.Provider>
  );
};
