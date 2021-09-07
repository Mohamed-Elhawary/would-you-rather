export function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatDate(timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestionUI(question, user) {
    const { id, timestamp, optionOne, optionTwo,  } = question;
    const { name, avatarURL } = user;

    return {
        id,
        author: name,
        avatarURL,
        optionOne: optionOne,
        optionTwo: optionTwo,
        timestamp: timestamp,
    }
}

export function formatUserUI(user) {
    const {id, name, avatarURL, answers, questions} = user;

    return {
        id,
        name,
        avatarURL,
        answeredQuestions: Object.keys(answers).length,
        addedQuestions: questions.length,
        score: Object.keys(answers).length + questions.length,
    }
}

export function formatQuestionDatabase({ optionOneText, optionTwoText, author }) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
            votes: [],
            text: optionOneText,
        },
        optionTwo: {
            votes: [],
            text: optionTwoText,
        }
    }
}