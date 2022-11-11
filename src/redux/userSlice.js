import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const axios = require('axios')


export const getUsers = createAsyncThunk("Users/getUsers", async() => {
  const response = await axios.get('https://636ca4e291576e19e310cfe0.mockapi.io/patientdata');
  return response.data;
});

export const addUsers = createAsyncThunk("Users/addUsers", async({nama, usia, jenis_kelamin, riwayat_penyakit}) => {
  const response = await axios.post('https://636ca4e291576e19e310cfe0.mockapi.io/patientdata', {
      nama, 
      usia, 
      jenis_kelamin, 
      riwayat_penyakit, 
  });
  return response.data;
});

export const updateUsers = createAsyncThunk("Users/updateUsers", async({id, nama, usia, jenis_kelamin, riwayat_penyakit}) => {
  const response = await axios.put(`https://636ca4e291576e19e310cfe0.mockapi.io/patientdata/${id}`, {
      nama, 
      usia, 
      jenis_kelamin, 
      riwayat_penyakit, 
  });
  return response.data;
});

export const deleteUsers = createAsyncThunk("Users/deleteUsers", async (id) => {
  await axios.delete(`https://636ca4e291576e19e310cfe0.mockapi.io/patientdata/${id}`);
  return id;
});

const initialState = [];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, nama, usia, jenis_kelamin, riwayat_penyakit } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        existingUser.nama = nama;
        existingUser.usia = usia;
        existingUser.jenis_kelamin = jenis_kelamin;
        existingUser.riwayat_penyakit = riwayat_penyakit;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        return state.filter(user => user.id !== id);
      }
    }
  }
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;