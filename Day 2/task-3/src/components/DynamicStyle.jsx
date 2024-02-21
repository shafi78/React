import React, { useState } from "react";

const DynamicStyle = () => {

    const [color,setColor] = useState(false);


    const handleClick = () => {
        setColor(isColor => !isColor)
    }

  return (
    <div>
      <p className={color ? 'active' : undefined}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
};

export default DynamicStyle;
