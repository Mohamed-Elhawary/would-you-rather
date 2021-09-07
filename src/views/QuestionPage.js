import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Question } from 'components';

class QuestionPage extends Component { 
    render() {
        const { questions, authedUser, match } = this.props;
        const questionId = match.params.id;
        const question = questions[questionId];
        
        if(!question) {
            return <Redirect to="/404" />
        }

        const isAnsweredQuestion = question?.optionOne?.votes.includes(authedUser) || question?.optionTwo?.votes.includes(authedUser);

        return (
            <div className="view-page">
                <Question 
                    viewType={isAnsweredQuestion ? "internal-view-answered-question" : "internal-view-unanswered-question"} 
                    questionId={questionId}
                    authedUser={authedUser} 
                />
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, questions }) => ({
    authedUser,
    questions
});

export default connect(mapStateToProps)(withRouter(QuestionPage))