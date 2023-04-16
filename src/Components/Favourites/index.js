import React, { useContext } from "react";
import { FavouritesContext } from "../../Context/FavouritesContext";
import ProductDetail from "../ProductDetail";

const Favourites = () => {
  const [favouritesCount, setfavouritesCount] = useContext(FavouritesContext);
  return (
    <div>
      {favouritesCount.length === 0 && (
        <p className="w-full p-10 text-center font-bold">
          Your favourites is empty
        </p>
      )}
      {favouritesCount.map((itemId) => {
        return (
          <div className="cartItems" key={itemId}>
            <ProductDetail productId={itemId} page={"Favourites"} />
          </div>
        );
      })}
    </div>
  );
};

export default Favourites;
