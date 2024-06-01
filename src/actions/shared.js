// import {
//   _getQuestions,
//   _getUsers,
//   _saveQuestion,
//   _saveQuestionAnswer,
// } from "../utils/_DATA";
// import { showLoading, hideLoading } from "react-redux-loading-bar";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { getInitialData } from "../utils/api";
import { setAuthUser } from "./authUser";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthUser(null));
    });
  };
}