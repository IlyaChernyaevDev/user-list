import React, { useState } from 'react';

import Button from '../UI/Button/Button';

const User = (props) => {
  const [enteredUser, setEnteredUser] = useState({ username: '', age: '' });

  const inputHandler = (event) => {
    setEnteredUser((userData) => {
      return { ...userData, [event.target.name]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUser.username.length === 0 || enteredUser.age.length === 0) {
      props.setErrorModalInfo({
        show: true,
        errorTitle: 'Invalid input',
        errorText: 'Please enter a valid name and age (non-empty values)',
      });
    } else if (enteredUser.age < 1) {
      props.setErrorModalInfo({
        show: true,
        errorTitle: 'Invalid input',
        errorText: 'Please enter a valid age (>0)',
      });
    } else {
      props.addNewUser(enteredUser);
      setEnteredUser({
        username: '',
        age: '',
      });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Username</label>
      <input
        type='text'
        onChange={inputHandler}
        name='username'
        value={enteredUser.username}
      />
      <label>Age (Years)</label>
      <input
        type='number'
        onChange={inputHandler}
        name='age'
        value={enteredUser.age}
      />
      <Button type={'submit'}>Add user</Button>
    </form>
  );
};

export default User;
