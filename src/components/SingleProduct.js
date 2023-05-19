import { useState } from "react";

const SingleProduct = ({ productDetail, cart, setCart }) => {
  const [cartItem, setCartItem] = useState(cart[productDetail.id] || 0);

  const increase = () => {
    setCartItem((prevCartItem) => {
      const newCartItem = prevCartItem + 1;
      setCart((prevCart) => ({
        ...prevCart,
        [productDetail.id]: newCartItem,
      }));
      return newCartItem;
    });
  };

  const decrease = () => {
    if (cartItem > 0) {
      setCartItem((prevCartItem) => {
        const newCartItem = prevCartItem - 1;
        setCart((prevCart) => ({
          ...prevCart,
          [productDetail.id]: newCartItem,
        }));
        return newCartItem;
      });
    }
  };

  return (
    <>
      <div>
        <div className="imageContainer">
          <img
            className="image"
            src={productDetail.image}
            alt={productDetail.title}
          />
        </div>
        <p>{productDetail.title}</p>
        <p>
          {`$`}
          {productDetail.price}
        </p>
        <div>
          <button onClick={decrease}>
            <i className="fa fa-light fa-circle-minus"></i>
          </button>
          <span className="counter">{cartItem}</span>
          <button onClick={increase}>
            <i className="fa fa-light fa-circle-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
