import { configureStore } from "@reduxjs/toolkit";
import UserListReducer from "./redux/reducer";
export const store = configureStore({
  reducer: {
    userList: UserListReducer,
  },
});
