import React from "react";

import UserItem from "../UserItem";

const UserList = (props) => {
  return <ul>
    {props.items.map(user => {
      return <UserItem user={user} key={user.id} deleteUser={props.deleteUser}/>
    })}
  </ul>
}

export default UserList;