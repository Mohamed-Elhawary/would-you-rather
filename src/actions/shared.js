import { getInitialData, saveQuestionAnswer, saveQuestion } from 'utils/api';
import { receiveQuestions, answerQuestion, addQuestion } from "./questions";
import { receiveUsers, userAnswerQuestion, userAddQuestion } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
    return dispatch => {
        dispatch(showLoading());
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
            dispatch(hideLoading());
        });
    }
}

export function handleAnswerQuestion({authedUser, qid, answer}) {
    return dispatch => {
        dispatch(showLoading());
        return saveQuestionAnswer({authedUser, qid, answer}).then(() => {
            dispatch(answerQuestion({authedUser, qid, answer}))
            dispatch(userAnswerQuestion({authedUser, qid, answer}))
            dispatch(hideLoading())
        });
    }
}

export function handleAddQuestion(question) {
    return dispatch => {
        dispatch(showLoading());
        return saveQuestion(question).then(response => {
            dispatch(addQuestion(response))
            dispatch(userAddQuestion(response))
            dispatch(hideLoading())
        });
    }
}