import React from "react";

const Cart = (props) => {
  const cart = props.cart;

  //const total = cart.reduce((total, prd) => total + prd.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const pd = cart[i];
    total = total + pd.price;
    console.log(total, pd.price);
  }
  //   let shipping = 0;
  //   if (total > 35) {
  //     shipping = 0;
  //   } else if (total > 15) {
  //     shipping = 4.99;
  //   } else if (total > 0) {
  //     shipping = 12.99;
  //   }
  //   const tax = Math.round(total / 10);
  return (
    <div>
      <h4>Order Summary</h4>
      <p>Item Order:{cart.length}</p>
      {/* <p>
        <small>Shipping:{shipping}</small>
      </p>
      <p>
        <small>tax:{tax}</small>
      </p> */}
      <p>Total :{total}</p>
    </div>
  );
};

export default Cart;
