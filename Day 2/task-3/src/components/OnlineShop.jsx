import React, { useState } from "react";

const OnlineShop = () => {

    const [price,setPrice] = useState(100);

    const handleClick = () => {
        setPrice(75);
    }

  return (
    <div>
      <p data-testid="price">${price}</p>
      <button onClick={handleClick}>Apply Discount</button>
    </div>
  );
};

export default OnlineShop;
