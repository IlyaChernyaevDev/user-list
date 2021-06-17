import React from "react";

import UserItem from "../UserItem/UserItem";

const UserList = (props) => {
  return <ul>
    {props.items.map(user => {
      return <UserItem name={user.name} age={user.age}/>
    })}
  </ul>
}

export default UserList;