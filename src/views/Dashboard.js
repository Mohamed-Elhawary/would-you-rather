import React, { Component } from 'react';
import { Tabs } from 'antd';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleInitialData } from "actions/shared"
import { Question } from 'components';

const { TabPane } = Tabs;

class Dashboard extends Component {
    componentDidMount() {
        this.props.getData(this.props.authedUser);
    } 

    render() {
        const {answeredQuestionsIds, unAnsweredQuestionsIds} = this.props;
       
        return (
            <div className="view-page">
                <Container>
                    <h3 className="font-bold text-center main-color my-4">Dashboard</h3>
                    <Tabs defaultActiveKey="unanswered flew-wrap">
                        <TabPane tab={`UnAnswered Questions (${unAnsweredQuestionsIds.length})`} key="unanswered" className="mt-3">
                            {unAnsweredQuestionsIds.length > 0 ? unAnsweredQuestionsIds.map(questionId => (
                                <Question 
                                    key={questionId} 
                                    questionId={questionId} 
                                    viewType="external-view-question" 
                                />
                            )) : <h6 className="font-bold text-center main-color">No unAnswered Questions Yet</h6>}
                        </TabPane>
                        <TabPane tab={`Answered Questions (${answeredQuestionsIds.length})`} key="answered" className="mt-3">
                            {answeredQuestionsIds.length > 0 ? answeredQuestionsIds.map(questionId => (
                                <Question 
                                    key={questionId} 
                                    questionId={questionId} 
                                    viewType="external-view-question" 
                                />
                            )) : <h6 className="font-bold text-center main-color">No Answered Questions Yet</h6>}
                        </TabPane>
                    </Tabs>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({ questions, authedUser }) => ({
    answeredQuestionsIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp).filter(questionId =>
        questions[questionId].optionOne.votes.includes(authedUser) ||
        questions[questionId].optionTwo.votes.includes(authedUser)
    ),
    unAnsweredQuestionsIds: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp).filter(questionId =>
        !questions[questionId].optionOne.votes.includes(authedUser) &&
        !questions[questionId].optionTwo.votes.includes(authedUser)
    ),
    authedUser
});

const mapDispatchToProps = (dispatch) => ({
    getData: (userId) => dispatch(handleInitialData(userId))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);