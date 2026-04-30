import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3000/user";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await axios.get(API);
  return res.data;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

export const editUser = createAsyncThunk(
  "users/editUser",
  async ({ id, updatedData }) => {
    const res = await axios.put(`${API}/${id}`, updatedData);
    return res.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (user) => user.id !== action.payload
        );
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (u) => u.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      });
  },
});

export default userSlice.reducer;