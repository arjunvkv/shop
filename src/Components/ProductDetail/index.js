import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-stars";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillSignal, AiOutlineHeart } from "react-icons/ai";
import { CartContext } from "../../Context/CartContext";
import { getProduct } from "../../Api/ProductApi";
import { FavouritesContext } from "../../Context/FavouritesContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetail = ({ productId, page }) => {
  const [cartCount, setcartCount] = useContext(CartContext);
  const [favouritesCount, setfavouritesCount] = useContext(FavouritesContext);
  const [image, setImage] = useState(0);
  const [productDetail, setProductDetail] = useState({});

  const isInCartNotify = () => toast.error("Item already present in Cart");
  const addToCartNotify = () => toast("Item added to Cart");
  const isInFavouritesNotify = () =>
    toast.error("Item already present in Favourites");
  const addToFavouritesNotify = () => toast("Item added to Favourites");

  useEffect(() => {
    const getProductDetails = async () => {
      const productDetail = await (await getProduct(productId)).json();
      setProductDetail(productDetail);
    };
    getProductDetails();
  }, [productId]);

  const addToCart = (id) => {
    if (!cartCount.includes(id)) {
      setcartCount((prev) => [...prev, productDetail.id]);
      addToCartNotify();
    } else {
      isInCartNotify();
    }
  };
  const addToFavourites = (id) => {
    if (!favouritesCount.includes(id)) {
      setfavouritesCount((prev) => [...prev, productDetail.id]);
      addToFavouritesNotify();
    } else {
      isInFavouritesNotify();
    }
  };
  return (
    <div className="text-dark-green p-5">
      {productDetail && (
        <div className="md:flex-row flex-col gap-5 md:flex">
          <div className="md:w-7/12 lg:w-auto w-full h-auto">
            <img src={productDetail?.images?.[image]} alt="" width="" />
          </div>
          <div className="space-y-3 lg:space-y-4 flex flex-col justify-around text-sm lg:text-3xl font-bold w-full md:px-5 mt-5 md:mt-0">
            <h2 className="font-bold">{productDetail.title}</h2>
            <p className="">${productDetail.price}</p>
            <div className="rating flex text-2xl space-x-3">
              <ReactStars
                count={5}
                size={24}
                edit={false}
                value={Math.round(productDetail.rating)}
                color1={"#a9a9a9"}
                color2={"#586a57"}
              />
              <p>{productDetail.rating}</p>
            </div>
            <div>
              <p>Colors</p>
              <div className="colors">
                <ul className="flex gap-3 py-5">
                  {productDetail?.images?.map((image, i) => (
                    <li key={i}>
                      <button
                        className="rounded-full h-8 w-8 bg-red-300"
                        onClick={() => {
                          setImage(i);
                        }}
                      ></button>
                    </li>
                  ))}
                </ul>
                <div>
                  {page === "productDetailPage" && (
                    <div className="add-to-cart flex gap-4 items-center">
                      <button
                        className="button"
                        onClick={() => {
                          addToCart(productDetail.id);
                        }}
                      >
                        <HiShoppingCart />
                      </button>
                      <button
                        className="button"
                        onClick={() => {
                          addToFavourites(productDetail.id);
                        }}
                      >
                        <AiOutlineHeart />
                      </button>
                    </div>
                  )}
                  {page === "Cart" && (
                    <div className="add-to-cart flex gap-4 items-center">
                      <button className="button text-base">Buy</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer theme="dark" position="top-left" />
    </div>
  );
};

export default ProductDetail;
