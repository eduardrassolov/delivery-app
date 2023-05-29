import { React, useState } from "react";
import "../styles/styles.css";
import ShopsView from "../Components/Shop/ShopsView";
import Content from "../Components/Shop/Content";

export default function Shop() {
  //which shop is selected. on main page
  const [currentShop, setCurrentShop] = useState();
  const onLoadProducts = (shop_id) => {
    console.log(shop_id);
    setCurrentShop(shop_id);
  };
  return (
    <>
      <main>
        <ShopsView onChangeShop={onLoadProducts} />
        <Content currentShop={currentShop} />
      </main>
    </>
  );
}
