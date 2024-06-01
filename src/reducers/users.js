import {
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER,
  USERS,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_TO_USER:
      return {
        ...state,
        [action.authUser]: {
          ...state[action.authUser],
          answers: {
            ...state[action.authUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.qid),
        },
      };
    default:
      return state;
  }
}
