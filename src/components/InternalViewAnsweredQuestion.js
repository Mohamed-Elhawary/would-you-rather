import React from 'react';
import { Option } from 'ui';

const InternalViewAnsweredQuestion = ({question, authedUser}) => {
    const {optionOne, optionTwo} = question;
    const optionOneVotes = optionOne.votes.length;
    const optionTwoVotes = optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercentage = Math.round((optionOneVotes / totalVotes) * 100);
    const optionTwoPercentage = Math.round((optionTwoVotes / totalVotes) * 100);
    
    return (
        <div className="d-flex flex-wrap justify-content-around">
            <Option
                questionType="answered" 
                option={optionOne} 
                percentage={optionOnePercentage}
                optionVotes={optionOneVotes}
                totalVotes={totalVotes}
                authedUser={authedUser}
            />
            <Option 
                questionType="answered"
                option={optionTwo} 
                percentage={optionTwoPercentage}
                optionVotes={optionTwoVotes}
                totalVotes={totalVotes}
                authedUser={authedUser}
            />
        </div>
    )
}

export default InternalViewAnsweredQuestion;
