import React, { useState } from "react";

const DynamicStyle = () => {

    const [color,setColor] = useState(false);


    const handleClick = () => {
        setColor(color => !)
    }

  return (
    <div>
      <p className={handleClick ? 'red' : 'grey'}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
};

export default DynamicStyle;
