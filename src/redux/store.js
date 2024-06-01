import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import usersReducer from "./features/users/usersSlice";
import conversationReducer from "./features/conversations/conversationSlice";
import globalReducer from "./features/global/globalSlice";

const store = configureStore({
  reducer: {
    user: usersReducer,
    global: globalReducer,
    conversation: conversationReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
