import React, { useState } from 'react';

import User from './components/User/User';
import UserList from './components/UserList/UserList';
import ErrorModal from './components/UI/ErrorModal/ErrorModal';

function App() {
  const [users, setUsers] = useState([]);
  const [errorModalInfo, setErrorModalInfo] = useState({
    show: false,
    errorTitle: '',
    errorText: '',
  });

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
      <User addNewUser={addNewUser} setErrorModalInfo={setErrorModalInfo} />
      {users.length > 0 ? (
        <UserList items={users} deleteUser={deleteUser} />
      ) : null}
      <ErrorModal errorModalInfo={errorModalInfo} setErrorModalInfo={setErrorModalInfo}/>
    </div>
  );
}

export default App;
