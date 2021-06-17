import React from 'react';

const UserItem = ({user, deleteUser}) => {
  return (
    <li
      onClick={() => {
        deleteUser(user.id);
      }}
    >{`${user.username} (${user.age} years old)`}</li>
  );
};

export default UserItem;
