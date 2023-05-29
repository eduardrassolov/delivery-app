import { React, useState, useContext, useEffect } from "react";
import { OrderContext } from "../../App.js";
import { ContactsContext } from "../../Pages/ShoppingCart.jsx";
import Axios from "axios";

//Footer on page of Cart, contain total price and button for submit order
export default function Footer() {
  const { productsToOrder } = useContext(OrderContext);
  const { contacts, submitOrder } = useContext(ContactsContext);

  const [totalPrice, setTotalPrice] = useState(0);
  const handleSubmitOrder = () => {
    submitOrder(totalPrice);
  };

  //Update total price of products in cart
  useEffect(() => {
    console.log("price");
    setTotalPrice(
      productsToOrder.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [productsToOrder]);

  return (
    <>
      <div className="footer">
        <p className="order-price-text">Total price: {totalPrice}</p>
        <button onClick={handleSubmitOrder}>Confirm</button>
      </div>
    </>
  );
}
