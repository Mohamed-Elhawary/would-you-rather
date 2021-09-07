import { RECEIVE_USERS, USER_ADD_QUESTION, USER_ANSWER_QUESTION } from "types";

export default function usersReducer(users = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS: 
            return {
                ...users,
                ...action.payload.users
            }
        case USER_ADD_QUESTION: 
            const {author, id} = action.payload.question;
            return {
                ...users,
                [author]: {
                    ...users[author],
                    questions: users[author].questions.concat([id])
                }

            } 
        case USER_ANSWER_QUESTION: 
            const {authedUser, qid, answer} = action.payload;
            return {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    answers: {
                        ...users[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        default: return users
    }
}