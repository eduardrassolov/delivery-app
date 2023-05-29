import { React, createContext, useContext, useEffect, useState } from "react";
import Contacts from "../Components/ShoppingCart/Contacts";
import Cart from "../Components/ShoppingCart/Cart";
import Footer from "../Components/ShoppingCart/Footer";
import { OrderContext } from "../App.js";
import { model } from "../model";
import Overlay from "../Components/Overlay";

export const ContactsContext = createContext();

export default function ShoppingCart() {
  const [isHidden, setHidden] = useState(true);
  //array of products to order
  const { productsToOrder, productList } = useContext(OrderContext);
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
    setHidden(false);
    const finalOrder = generateOrder(bill);

    const response = async () => {
      try {
        const result = await model.sendOrderToServer(finalOrder);
        console.log("answer from server", result);
      } catch (err) {
        console.error(err);
      } finally {
        setHidden(true);
      }
    };
    response();
  };
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
  return (
    <>
      <Overlay isHidden={isHidden} />
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
