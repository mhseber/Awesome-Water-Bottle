import React from "react";

const Bottle = ({ bottle, handleAddToCart }) => {
  //   console.log(bottle);
  const { name, img, price, color, brand, description, model } = bottle;
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>Price: ${price}</p>
      <p>Color: {color}</p>
      <p>Brand: {brand}</p>
      <p>Description: {description}</p>
      <p>Model: {model}</p>
      <button className="btn" onClick={() => handleAddToCart(bottle)}>
        Buy Now
      </button>
    </div>
  );
};

export default Bottle;
