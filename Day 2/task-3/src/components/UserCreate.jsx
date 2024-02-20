import React from "react";

export const user = {
    name: '',
  };

const UserCreate = () => {

    const handleCreateUser = (name) => {
        user.name = name;
    }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
        <input type="text" />
      </p>

      <p id="actions">
        <button onClick={handleCreateUser}>Create User</button>
      </p>
    </div>
  );
};

export default UserCreate;
