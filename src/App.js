import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import ErrorModal from './components/UI/ErrorModal';

function App() {
  const [usersList, setUsersList] = useState([]);
  // const [errorModalInfo, setErrorModalInfo] = useState({
  //   show: false,
  //   errorTitle: '',
  //   errorText: '',
  // });

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  // const deleteUser = (id) => {
  //   setUsers((prevUsers) => {
  //     return prevUsers.filter((user) => user.id !== id);
  //   });
  // };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
