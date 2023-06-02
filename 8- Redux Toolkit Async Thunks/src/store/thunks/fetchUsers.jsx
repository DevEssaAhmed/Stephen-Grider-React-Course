import React from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');
  // DEV ONLY!!!
  // await puase(10000)
  return response.data;
});


// DEV ONLY!!!
const puase = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}




export { fetchUsers };
