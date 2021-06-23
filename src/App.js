import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import ErrorModal from './components/UI/ErrorModal';

function App() {
  // const [users, setUsers] = useState([]);
  // const [errorModalInfo, setErrorModalInfo] = useState({
  //   show: false,
  //   errorTitle: '',
  //   errorText: '',
  // });

  // const addNewUser = ({ username, age }) => {
  //   setUsers((prevUsers) => {
  //     return [...prevUsers, { username, age, id: Date.now() }];
  //   });
  // };

  // const deleteUser = (id) => {
  //   setUsers((prevUsers) => {
  //     return prevUsers.filter((user) => user.id !== id);
  //   });
  // };

  return (
    <div>
      <AddUser />
      <UsersList users={[]}/>
    </div>
  );
}

export default App;
