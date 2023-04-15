import React, { useContext } from "react";
import { FavouritesContext } from "../../Api/CartContext";
import ProductDetail from "../ProductDetail";

const Cart = () => {
  const [favouritesCount, setfavouritesCount] = useContext(FavouritesContext);
  return (
    <div>
      {favouritesCount.map((itemId) => {
        return (
          <div className="cartItems" key={itemId}>
            <ProductDetail productId={itemId} page={"Cart"} />
          </div>
        );
      })}
    </div>
  );
};

export default Favourites;
