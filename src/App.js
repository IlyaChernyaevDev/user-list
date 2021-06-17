import React, { useState } from 'react';

import User from './components/User/User';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = ({username, age}) => {
    setUsers((prevUsers) => {
      return [...prevUsers, {username, age, id: Date.now()}];
    });
  };

  return (
    <div>
      <User addNewUser={addNewUser}/>
      {users.length > 0 ? <UserList items={users}/> : null}
    </div>
  );
}

export default App;
