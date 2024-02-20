import React from 'react';

export const userData = {
  firstName: 'Shafiulla', // feel free to replace the name value
  lastName: 'Attar', // feel free to replace the name value
  title: 'Dynamic C', // feel free to replace the title value
};

const User = () => {
  return (
    <div id="user" data-testid="user">
      <h2>
        TODO: {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  )
}

export default User