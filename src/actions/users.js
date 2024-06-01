export const USERS = "USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
  
  export function receiveUsers(users) {
    return {
      type: USERS,
      users,
    };
  }
  
  export function addAnswerUser(authUser, qid, answer) {
    return {
      type: ADD_ANSWER_TO_USER,
      authUser,
      qid,
      answer,
    };
  }
  
  export function addQuestionUser({ author, id }) {
    return {
      type: ADD_QUESTION_TO_USER,
      author,
      qid: id,
    };
  }
  