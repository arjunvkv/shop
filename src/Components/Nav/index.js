import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/shop_logo.webp";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAccountBox } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CartContext } from "../../Context/CartContext";
import { FavouritesContext } from "../../Context/FavouritesContext";

const Nav = () => {
  const [cartCount] = useContext(CartContext);
  const [favouritesCount, setfavouritesCount] = useContext(FavouritesContext);
  return (
    <div className="nav-container sticky w-full bg-light-green text-dark-green font-bold capitalize flex items-center justify-between p-2">
      <div className="logo shadow-md">
        <div className="bg-primary-light flex items-center space-x-1 pr-4 rounded-md">
          <img
            className="rounded-lg m-2 mix-blend-multiply text-sm w-7 h-auto md:w-9"
            src={logo}
            alt=""
          />
          <span>Shop</span>
        </div>
      </div>

      {/* nav for smaller devices */}
      <div className="nav-buttons md:hidden">
        <button className="button">
          <GiHamburgerMenu />
        </button>
      </div>

      {/* nav for large devices */}
      <div className="nav-buttons hidden md:block">
        <ul className="flex gap-5">
          <li className="button">
            <Link to="/">Menu</Link>
          </li>
          <li className="button">
            <Link to="/favourites">
              <div className="flex">
                <AiOutlineHeart fontSize="1.5em" />
                <p className="relative -top-3">{favouritesCount.length}</p>
              </div>
            </Link>
          </li>
          <li className="button">
            <Link to="/cart">
              <div className="flex">
                <HiShoppingCart fontSize="1.5em" />
                <p className="relative -top-3">{cartCount.length}</p>
              </div>
            </Link>
          </li>
          <li className="button">
            <Link to="/profile">
              <MdOutlineAccountBox fontSize="1.5em" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
