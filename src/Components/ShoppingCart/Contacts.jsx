import React, { useContext } from "react";
import { ContactsContext } from "../../Pages/ShoppingCart.jsx";

//Customer contacts comp
export default function Contacts() {
  const { currentCustomer, setCurrentCustomer } = useContext(ContactsContext);

  const handleInput = ({ target }) => {
    setCurrentCustomer({ ...currentCustomer, [target.name]: target.value });
  };

  // TODO: change inputs to Component

  return (
    <>
      <section id="contacts">
        <h1 className="header">Contacts</h1>
        <form>
          <fieldset>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              autoFocus
              required
              onInput={handleInput}
              value={currentCustomer.name}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
              onInput={handleInput}
              value={currentCustomer.email}
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              name="phone"
              placeholder="Enter phone"
              required
              onInput={handleInput}
              value={currentCustomer.phone}
            />

            <label htmlFor="adress">Adress:</label>
            <input
              type="text"
              name="adress"
              placeholder="Enter adress"
              required
              onInput={handleInput}
              value={currentCustomer.adress}
            />
          </fieldset>
        </form>
      </section>
    </>
  );
}
