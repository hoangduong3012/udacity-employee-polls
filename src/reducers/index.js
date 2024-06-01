import { combineReducers } from "@reduxjs/toolkit";
// import { loadingBarReducer } from "react-redux-loading-bar";
import authUser from "./authUser";
import questions from "./questions";
import users from "./users";

export default combineReducers({
  authUser,
  users,
  questions
});
