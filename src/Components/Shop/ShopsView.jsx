import { React, useEffect, useContext } from "react";
import { QUERY_GET_SHOPS } from "../../config.js";
import "../../styles/styles.css";
import Restaurant from "./Restaurant.jsx";
import { OrderContext } from "../../App.js";
import Header from "../Header.jsx";
import { model } from "../../model.js";

const ShopsView = ({ onChangeShop }) => {
  //context of list of shops
  const { shopsList, setShopList } = useContext(OrderContext);

  //load shops from db
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await model.fetchData(QUERY_GET_SHOPS);
        setShopList(result?.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <aside>
        <Header>Shops:</Header>
        <ul className="shops-list">
          {shopsList.map((shop, index) => (
            <Restaurant
              key={index}
              restaurant={shop}
              onChangeShop={onChangeShop}
            />
          ))}
        </ul>
      </aside>
    </>
  );
};
export default ShopsView;
