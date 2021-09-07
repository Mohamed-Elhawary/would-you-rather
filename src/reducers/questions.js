import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from "types";

export default function questionsReducer(questions = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS: 
            return {
                ...questions,
                ...action.payload.questions
            }
        case ADD_QUESTION:
            const {question} = action.payload; 
            return {
                ...questions,
                [question.id]: question
            }
        case ANSWER_QUESTION: 
            const {authedUser, qid, answer} = action.payload;
            return {
                ...questions,
                [qid]: {
                    ...questions[qid],
                    [answer]: {
                        ...questions[qid][answer],
                        votes: questions[qid][answer].votes.concat([authedUser])
                    }
                }
            } 
        default: return questions
    }
}