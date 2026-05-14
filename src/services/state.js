import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "../components/user/userSlice";

const store = configureStore({
  user: useReducer,
});

export default store;
