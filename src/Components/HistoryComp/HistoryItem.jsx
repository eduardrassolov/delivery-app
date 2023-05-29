import React from "react";

export default function HistoryItem({
  item: { order_number, customers, productsArr, created, bill },
}) {
  return (
    <>
      {/* TODO: refactor */}
      <div className="searched-item">
        <h2 className="header">Your order: </h2>
        <fieldset className="searched-container">
          <h3>Order number - {order_number}</h3>
          <p>
            {/* TODO Refactor this calculation */}
            Shop -{" "}
            {[...new Set(productsArr.map((prod) => prod.shop))].join(", ")}
          </p>
          <p>Products:</p>
          <ol>
            {productsArr.map((prod) => {
              return (
                <li key={prod._id}>
                  {prod.name} - {prod.quantity}
                </li>
              );
            })}
          </ol>
          <p>
            <strong>Total bill: {bill}</strong>
          </p>
        </fieldset>
        <fieldset className="searched-container">
          <h3>Delivery information:</h3>
          <p>To address - {customers.adress}</p>
          <p>Name - {customers.name}</p>
          <p>Email - {customers.email}</p>
          <p>Number - {customers.phone}</p>
          <p>Confirmed at - {new Date(created).toLocaleString()}</p>
        </fieldset>
      </div>
    </>
  );
}
