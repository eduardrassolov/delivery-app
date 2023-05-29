import NavBar from "./Components/NavBar.jsx";
import Shop from "./Pages/Shop.jsx";
import ShoppingCart from "./Pages/ShoppingCart.jsx";
import History from "./Pages/History.jsx";
import { React, useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//TODO: refactor components, use useRef, useMemo, useCallback
//TODO: add visual effect for products which already in cart
//TODO: refactor delete items from cart
//TODO: add validation for contacts and other fields
//TODO: add notification for user, after submit order, after delete item from cart etc.

export const OrderContext = createContext();
function App() {
  const [productsToOrder, setProductsToOrder] = useState([]);
  const [productList, setProductList] = useState([]);
  const [shopsList, setShopList] = useState([]);

  const addProductToCart = (id) => {
    const [item] = productList.filter((product) => product._id === id);
    setProductsToOrder((prev) => [...prev, item]);
  };
  const setOverlay = (value) => {};

  return (
    <>
      <OrderContext.Provider
        value={{
          productsToOrder,
          setProductsToOrder,
          productList,
          setProductList,
          addProductToCart,
          shopsList,
          setShopList,
        }}
      >
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Router>
      </OrderContext.Provider>
    </>
  );
}

export default App;
