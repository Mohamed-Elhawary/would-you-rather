import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { formatQuestionUI } from 'utils/helpers';
import { Avatar } from 'ui';
import ExternalViewQuestion from './ExternalViewQuestion';
import InternalViewAnsweredQuestion from './InternalViewAnsweredQuestion';
import InternalViewUnAnsweredQuestion from './InternalViewUnAnsweredQuestion';

const Question = ({question, viewType, authedUser}) => {
    const {id, author, avatarURL, optionOne, optionTwo} = question;

    const currentQuestionViewContent = 
        viewType === "external-view-question" ? 
            <ExternalViewQuestion id={id} optionOne={optionOne} optionTwo={optionTwo} /> : 
        viewType === "internal-view-answered-question" ? 
            <InternalViewAnsweredQuestion question={question} authedUser={authedUser} /> : 
            <InternalViewUnAnsweredQuestion question={question} authedUser={authedUser} />;

    return (
        <Card title={(<><span className="font-bold main-color">{author}</span> <span className="third-color">Asks, Would you rather:</span></>)} className="w-100 mb-4 radius text-center">
            <div>
                <Avatar src={avatarURL} className="shadow mb-4" width="100" height="100" />
            </div>
            {currentQuestionViewContent}
        </Card>
    )
}

function mapStateToProps ({ users, questions}, { questionId }) {
    const question = questions[questionId];

    return {
        question: question ? formatQuestionUI(question, users[question.author]) : null
    }
  }
  
  export default connect(mapStateToProps)(Question);