import { createContext } from "react";

const ProductContext = createContext();

function ProductContext({ children }) {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
