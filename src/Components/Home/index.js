import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import { Carousel } from "antd";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const contentStyle = {
  height: "500px",
  color: "#586a57",
  lineHeight: "160px",
  textAlign: "center",
  width: "90%",
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "30px",
  placeItems: "center",
  background: "white",
};

// const productPage = (id) => ;

const Home = () => {
  const CarouselRef = useRef(null);
  const [products, setProducts] = useContext(ProductContext);
  return (
    <div className="h-screen relative bg-primary-light">
      <div className="w-full text-center">
        <h3 className="button font-bold text-dark-green">Products</h3>
      </div>
      <Carousel effect="fade" autoplay ref={CarouselRef}>
        {products?.products?.map((item) => {
          return (
            <div className="product" key={item.id}>
              <div style={contentStyle}>
                <div className="leftArrow ">
                  <FaRegArrowAltCircleLeft
                    onClick={() => {
                      CarouselRef.current.prev();
                    }}
                    className="cursor-pointer"
                    fontSize="2em"
                  />
                </div>
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.images[0]}
                    className="cursor-pointer"
                    alt=""
                    width=""
                  />
                </Link>

                <div className="rightArrow ">
                  <FaRegArrowAltCircleRight
                    onClick={() => {
                      CarouselRef.current.next();
                    }}
                    className="cursor-pointer"
                    fontSize="2em"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Home;
