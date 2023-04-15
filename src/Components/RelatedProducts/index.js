import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";

const RelatedProducts = () => {
  const [products, setProducts] = useContext(ProductContext);
  console.log("products :>>>>", products);
  return (
    <div className="py-10">
      <h3 className="font-bold text-3xl">Related Products</h3>
      <div className="flex gap-5 py-10">
        {products?.products?.map((item) => {
          return (
            <div className="related-products" key={item.id}>
              <div className="cards">
                <img src={item.images[0]} alt="" width="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
