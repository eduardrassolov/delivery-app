import { React, useContext } from "react";
import "../../styles/styles.css";
import { OrderContext } from "../../App.js";

export default function Product({ product }) {
  const { addProductToCart: addProduct } = useContext(OrderContext);

  const handleAddToCart = (id) => {
    addProduct(id);
  };
  return (
    <>
      <div className="item">
        <div
          className="overlay"
          style={{
            backgroundImage: `url(${product.img_url})`,
          }}
        ></div>
        <h1>{product.product}</h1>
        <p>{product.shop_id.shop_name}</p>
        <h3>Price: {product.price} $</h3>
        <button
          className="btn btn-order"
          onClick={() => handleAddToCart(product._id)}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
