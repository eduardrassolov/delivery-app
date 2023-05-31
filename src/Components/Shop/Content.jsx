import { React, useState, useContext, useEffect } from "react";
import Product from "./Product.jsx";
import { QUERY_GET_PRODUCTS } from "../../config.js";
import { OrderContext } from "../../App.js";
import { model } from "../../model.js";
import Overlay from "../Overlay.jsx";

export default function Content({ currentShop }) {
  //For loading overlay
  const [isHidden, setIsHidden] = useState(true);
  //array of loaded products from db
  const { productList, setProductList } = useContext(OrderContext);

  useEffect(() => {
    const getData = async () => {
      try {
        if (productList.length === 0) setIsHidden(false);

        if (!currentShop) return;
        const query = `${QUERY_GET_PRODUCTS}?shopid=${currentShop}`;
        const result = await model.fetchData(query);

        setProductList(result?.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsHidden(true);
      }
    };
    getData();
  }, [currentShop]);
  return (
    <>
      <section>
        <h1 className="header">Products:</h1>
        <div className="container">
          {productList.map((product, index) => {
            return <Product key={`${product}${index}`} product={product} />;
          })}
        </div>
      </section>
      <Overlay isHidden={isHidden} />
    </>
  );
}
