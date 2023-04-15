import React, { useContext } from "react";
import { CartContext } from "../../Api/CartContext";
import ProductDetail from "../ProductDetail";

const Cart = () => {
  const [cartCount, setcartCount] = useContext(CartContext);
  return (
    <div>
      {cartCount.length === 0 && (
        <p className="w-full p-10 text-center font-bold">Your cart is empty</p>
      )}
      {cartCount?.map((itemId) => {
        return (
          <div className="cartItems" key={itemId}>
            <ProductDetail productId={itemId} page={"Cart"} />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
