import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail";
import RelatedProducts from "../RelatedProducts";

const Product = () => {
  const { id } = useParams();

  return (
    <div>
      <ProductDetail productId={id} page={"productDetailPage"} />
      <div className="p-5">
        <RelatedProducts />
      </div>
    </div>
  );
};

export default Product;
