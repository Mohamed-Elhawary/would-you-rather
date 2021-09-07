import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { formatUserUI } from 'utils/helpers';
import { Avatar } from 'ui';

const User = ({user}) => {
    const {name, avatarURL, answeredQuestions, addedQuestions, score} = user;

    return (
        <Card title={(<span className="font-bold main-color">{name}</span>)} className="w-100 mb-4 radius text-center">
            <div>
                <Avatar src={avatarURL} className="shadow mb-4" width="100" height="100" />
            </div>
            <h5 className="third-color">Answered Questions: <span className="font-bold main-color ml-2">{answeredQuestions}</span></h5>
            <h5 className="third-color">Added Questions: <span className="font-bold main-color ml-2">{addedQuestions}</span></h5>
            <h4 className="third-color font-bold">Score: <span className="font-bold main-color ml-2">{score}</span></h4>
        </Card>
    )
}

function mapStateToProps ({ users}, { userId }) {
    const user = users[userId];

    return {
        user: user ? formatUserUI(user) : null
    }
  }
  
  export default connect(mapStateToProps)(User);