import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/todoSlice";
import habitReducer from "../features/habit/habitSlice";
import userDetail from "../features/userDetails/userDetails";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    habit: habitReducer,
    users: userDetail,
  },
});

export default store;
