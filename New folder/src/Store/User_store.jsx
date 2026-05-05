import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Project/Slice/AuthSlice";
import userReducer from "../Project/Slice/UserSlice";

export const User_store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
  },
});