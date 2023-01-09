import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./Cart.css";
const CartItem = (props) => {
  const { id, name, Experience, ServiceName, city, image, amount, rating } =
    props.data;
  const { cartItem, addToCart, removeFromCart, updateCartItemCount } =
    useContext(UserContext);
  return (
    <div className="cartItem">
      <img src={image} alt="productimg" srcset="" />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>${amount}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItem[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
