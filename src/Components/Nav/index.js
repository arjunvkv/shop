import React, { createContext } from "react";
import logo from "../../Images/shop_logo.webp";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAccountBox } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="nav-container absolute w-full bg-light-green text-dark-green font-bold capitalize flex items-center justify-between p-2">
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
            <a href="">menu</a>
          </li>
          <li className="button">
            <a href="">
              <AiOutlineHeart fontSize="1.5em" />
            </a>
          </li>
          <li className="button">
            <a href="">
              <HiShoppingCart fontSize="1.5em" />
            </a>
          </li>
          <li className="button">
            <a href="">
              <MdOutlineAccountBox fontSize="1.5em" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
