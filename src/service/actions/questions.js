import {saveQuestion, saveQuestionAnswer} from "../../util/api";
import {addAnswerUser, addQuestionUser} from "./users";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receive(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

function add(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

function addAQ(author, qid, answer) {
    return {
        type: ADD_ANSWER_QUESTION,
        author,
        qid,
        answer,
    };
}

export function handleAddQuestion(firstOption, secondOption) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestion(firstOption, secondOption, authedUser)
            .then((question) => {
                dispatch(add(question));
                dispatch(addQuestionUser(question))
            })
    };
}

export function handleAddAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return saveQuestionAnswer(authedUser.id, questionId, answer)
            .then(() => {
                dispatch(addAQ(authedUser.id, questionId, answer));
                dispatch(addAnswerUser(authedUser.id, questionId, answer));
            });
    };
}
