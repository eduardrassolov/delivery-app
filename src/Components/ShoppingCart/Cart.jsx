import { React, useState, useEffect, useContext } from "react";
import OrderItem from "./OrderItem.jsx";
import { OrderContext } from "../../App.js";

//Component for displaying the order
export default function Cart() {
  const { productsToOrder } = useContext(OrderContext);

  return (
    <>
      <section id="order">
        <h1 className="header">My Order: </h1>
        {productsToOrder &&
          productsToOrder.map((item, index) => (
            <OrderItem key={`${index}_${index}`} item={item} />
          ))}
      </section>
    </>
  );
}
