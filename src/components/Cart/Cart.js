import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
  //   let totalPrice = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     totalPrice = totalPrice + cart[i].price;
  //   }

  var shipping = 0;
  if (totalPrice > 35) {
    shipping = 0;
  }
  if (totalPrice > 15) {
    shipping = 4.99;
  } else if (totalPrice > 0) {
    shipping = 12.99;
  }

  const tax = totalPrice / 10;
  const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items ordered: {cart.length} </p>
      <p>Product Price: {formatNumber(totalPrice)}</p>
      <p>
        <small>Shipping Cost: {shipping}</small>
      </p>
      <p>
        <small>Tax+Vat: {formatNumber(tax)}</small>
      </p>
      <p>Total Price: ${grandTotal}</p>
    </div>
  );
};

export default Cart;
