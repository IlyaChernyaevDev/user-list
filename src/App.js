import React, { useState } from 'react';

import User from './components/User/User';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = ({ username, age }) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { username, age, id: Date.now() }];
    });
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };

  return (
    <div>
      <User addNewUser={addNewUser} />
      {users.length > 0 ? <UserList items={users} deleteUser={deleteUser}/> : null}
    </div>
  );
}

export default App;
