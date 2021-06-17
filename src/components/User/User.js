import React, { useState } from 'react';

const User = () => {
  const [enteredUser, setEnteredUser] = useState({ username: '', age: '' });

  const inputHandler = (event) => {
    setEnteredUser((userData) => {
      return { ...userData, [event.target.name]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUser.username.length === 0 || enteredUser.age.length === 0) {
      console.log('Please enter a valid name and age (non-empty values)');
    } else if (enteredUser.age < 1) {
      console.log('Please enter a valid age (>0)');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Username</label>
      <input type='text' onChange={inputHandler} name='username' />
      <label>Age (Years)</label>
      <input type='number' onChange={inputHandler} name='age' />
      <button type='submit'>Add user</button>
    </form>
  );
};

export default User;
