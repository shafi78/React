import React, { useState } from "react";

const ConditionContent = () => {

    const [message,setMessage] = useState(false);

    const handleDelete = () => {
        setMessage(true)
    }

    const handleProceed = () => {
        setMessage(false);
    }
    
    return (
    <div>
      {message && <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={handleProceed}>Proceed</button>
      </div>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ConditionContent;
