import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";

const RelatedProducts = () => {
  const [products, setProducts] = useContext(ProductContext);
  return (
    <div className="py-10">
      <h3 className="font-bold text-3xl">Related Products</h3>
      <div className="flex gap-5 py-10">
        {products?.products?.map((item) => {
          return (
            <div className="related-products" key={item.id}>
              <div className="cards">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.images[0]}
                    className="cursor-pointer"
                    alt=""
                    width=""
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
