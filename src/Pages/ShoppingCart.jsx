import { React, createContext, useContext, useState } from "react";
import Contacts from "../Components/ShoppingCart/Contacts";
import Cart from "../Components/ShoppingCart/Cart";
import Footer from "../Components/ShoppingCart/Footer";
import { OrderContext } from "../App.js";
import { model } from "../model";
import Overlay from "../Components/Overlay";
import { redirect, Link } from "react-router-dom";
export const ContactsContext = createContext();

export default function ShoppingCart() {
  const [isHidden, setHidden] = useState(true);
  const [confirmedOrder, setConfirmedOrder] = useState();
  //array of products to order
  const { productsToOrder, setProductsToOrder } = useContext(OrderContext);
  //State of current order
  const [currentOrder, setCurrentOrder] = useState({});
  //State of contact
  const [currentCustomer, setCurrentCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
  });

  const submitOrder = (bill) => {
    try {
      //Check if all fields are filled
      if (!isValid()) throw new Error("customer data is not valid");
      if (productsToOrder.length === 0) throw new Error("cart is empty");

      setHidden(false);

      const finalOrder = generateOrder(bill);

      const response = async () => {
        try {
          const result = await model.sendOrderToServer(finalOrder);
          console.log("answer from server", result);
          setConfirmedOrder(result.data[0]);
          setProductsToOrder([]);
        } catch (err) {
          console.error(err);
        } finally {
        }
      };
      response();
    } catch (err) {
      alert(err.message);
    }
  };

  const isValid = () =>
    currentCustomer.name.length > 0 &&
    currentCustomer.email.length > 0 &&
    currentCustomer.phone.length > 0 &&
    currentCustomer.adress.length > 0;

  const generateOrder = (bill) => {
    return {
      customers: currentCustomer,
      productsArr: productsToOrder.map((item) => {
        return {
          product_id: item._id,
          quantity: item.quantity,
        };
      }),
      bill: bill,
      created: new Date().getTime(),
    };
  };

  const onClickClose = () => {
    redirect("/");
    setHidden(true);
  };
  return (
    <>
      <Overlay
        isHidden={isHidden}
        item={confirmedOrder}
        onClickClose={onClickClose}
        visible={!isHidden}
      />
      <main>
        <ContactsContext.Provider
          value={{
            currentCustomer,
            currentOrder,
            setCurrentOrder,
            setCurrentCustomer,
            submitOrder,
          }}
        >
          <Contacts />
          <Cart />
          <Footer productsToOrder={productsToOrder} />
        </ContactsContext.Provider>
      </main>
    </>
  );
}
