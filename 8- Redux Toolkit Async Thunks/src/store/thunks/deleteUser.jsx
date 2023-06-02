import React from 'react';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const removeUser = createAsyncThunk('users/remove', async (user) => {
  const response = await axios.delete(`http://localhost:3005/users/${user.id}`);

  // FIX !!!
  return user;
});

export { removeUser };
