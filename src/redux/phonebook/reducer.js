import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { filterUpdate } from "./actions";

const filter = createReducer("", {
  [filterUpdate]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
});
