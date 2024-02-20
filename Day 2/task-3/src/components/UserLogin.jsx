// task 3

import React from 'react'

export const user = {
    email: '',
    password: '',
    loggedIn: false,
  };
  

const UserLogin = () => {

    const handleSubmit = () => {
        user.email = "shafi@gmail.com",
        user.password = "abcd",
        user.loggedIn = true
      };

  return (
    <div>
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={handleSubmit}>Login</button>
      </p>
    </div>
    </div>
  )
}

export default UserLogin