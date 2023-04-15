const getAllProducts = () => {
  return fetch("https://dummyjson.com/products/category/furniture");
};
const getProduct = (id) => {
  return fetch(`https://dummyjson.com/products/${id}`);
};

export { getAllProducts, getProduct };
