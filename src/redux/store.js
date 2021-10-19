import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import filtre from "./phonebook/reducer";
import { contactsApi } from "./phonebook/slice";

const store = configureStore({
  reducer: {
    filtre,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
