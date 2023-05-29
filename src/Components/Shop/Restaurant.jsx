import React from "react";

export default function Restaurant({ restaurant, onChangeShop }) {
  const handleClick = (e) => {
    onChangeShop(restaurant._id);
  };
  return (
    <>
      <li id={restaurant._id} className="shops-item" onClick={handleClick}>
        {restaurant.shop_name}
      </li>
    </>
  );
}
