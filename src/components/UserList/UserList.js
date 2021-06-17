import React from "react";

import UserItem from "../UserItem/UserItem";

const UserList = (props) => {
  return <ul>
    {props.items.map(user => {
      return <UserItem name={user.username} age={user.age} key={user.id}/>
    })}
  </ul>
}

export default UserList;