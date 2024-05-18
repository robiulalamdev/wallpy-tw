import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import usersReducer from "./features/users/usersSlice";
import conversationReducer from "./features/conversations/conversationSlice";

const store = configureStore({
  reducer: {
    user: usersReducer,
    conversation: conversationReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
