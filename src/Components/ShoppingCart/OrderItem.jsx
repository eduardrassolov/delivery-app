import { React, useContext, useEffect, useState } from "react";
import { OrderContext } from "../../App.js";

export default function OrderItem({
  item: { _id, product, price, shop_id, img_url },
}) {
  //items which in cart
  const { setProductsToOrder } = useContext(OrderContext);
  const [quantityItem, setQuantity] = useState(1);

  const handleChangeQuantity = ({ target }) => {
    setQuantity(Number(target.value));
  };
  //Delete item from cart
  const handleDelete = () => {
    setProductsToOrder((prev) => prev.filter((item) => item._id !== _id));
  };

  useEffect(() => {
    setProductsToOrder((prev) =>
      prev.map((item) =>
        item._id === _id ? { ...item, quantity: quantityItem } : item
      )
    );
  }, [quantityItem]);
  return (
    <>
      <div className="order-item">
        <div className="img-container">
          <img src={img_url} alt="" />
        </div>
        <div className="item-content">
          <h1>{product}</h1>
          <h5>Shop - {shop_id.shop_name}</h5>
          <p>Price: {price}.00$</p>
          <label htmlFor="quantity">Quantity:</label>
          <input
            name="quantity"
            type="number"
            onInput={handleChangeQuantity}
            min={1}
            value={quantityItem}
          />
          <button onClick={handleDelete}>Remove</button>
        </div>
      </div>
    </>
  );
}
