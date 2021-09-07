import { usersData, questionsData } from "db";
import { formatQuestionDatabase } from "./helpers";

let users = usersData;
let questions = questionsData;

export function _getUsers() {
	return new Promise((res, rej) => {
		setTimeout(() => res({...users}), 1000)
	})
}

export function _getQuestions() {
	return new Promise((res, rej) => {
		setTimeout(() => res({...questions}), 1000)
	})
}

export function _saveQuestion(question) {
	return new Promise((res, rej) => {
		const authedUser = question.author;
		const formattedQuestion = formatQuestionDatabase(question);

		setTimeout(() => {
		questions = {
			...questions,
			[formattedQuestion.id]: formattedQuestion
		}
		
		users = {
			...users,
			[authedUser]: {
				...users[authedUser],
				questions: users[authedUser].questions.concat([formattedQuestion.id])
			}
		}

		res(formattedQuestion)
		}, 1000)
	})
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
	console.log(authedUser, qid, answer)
	return new Promise((res, rej) => {
		setTimeout(() => {
			users = {
				...users,
				[authedUser]: {
					...users[authedUser],
					answers: {
						...users[authedUser].answers,
						[qid]: answer
					}
				}
			}

			questions = {
				...questions,
				[qid]: {
					...questions[qid],
					[answer]: {
						...questions[qid][answer],
						votes: questions[qid][answer].votes.concat([authedUser])
					}
				}
			}
			res();
		}, 500)
  	})
}
