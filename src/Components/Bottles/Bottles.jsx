import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);

  const handleAddToCart = () => {
    console.log("Bottle Buy Now");
  };

  //   console.log(bottles);
  return (
    <div>
      <h1>Bottles : {bottles.length}</h1>
      {bottles.map((bottle) => (
        <Bottle
          key={bottle.id}
          bottle={bottle}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default Bottles;
