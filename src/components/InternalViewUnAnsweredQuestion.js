import React, { useState } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Radio } from 'antd';
import { handleAnswerQuestion } from 'actions/shared';
import { Option } from "ui";

const InternalViewUnAnsweredQuestion = ({question, authedUser, dispatch}) => {
    const [chosenOption, setChosenOption] = useState("");
    const [submitAnswerError, setSubmitAnswerError] = useState(false);
    const {id, optionOne, optionTwo} = question;

    const handleSubmitAnswer = () => {
        if(!chosenOption) {
            setSubmitAnswerError(true);
        } else {
            
            const optionNumber = chosenOption === optionOne.text ? "optionOne" : "optionTwo";
            console.log(authedUser, id, optionNumber)
            dispatch(handleAnswerQuestion({authedUser, qid: id, answer: optionNumber}));
        }
    } 

    return (
        <>
            <div>
                <Radio.Group
                    className="d-flex flex-wrap justify-content-around mt-5" 
                    onChange={(e) => setChosenOption(e.target.value)}
                    value={chosenOption}
                >
                    <Option 
                        questionType="unanswered"
                        option={optionOne}
                    />
                    <Option 
                        questionType="unanswered"
                        option={optionTwo}
                    />
                </Radio.Group>
            </div>
            <Button 
                className="shadow radius main-bg secondary-color font-bold mt-4"
                onClick={() => handleSubmitAnswer()}
            >Answer</Button>
            {submitAnswerError && <span className="notify-text text-danger font-italic font-bold d-block mt-3">Please Select an Answer First</span>}
        </>
    )
}

export default connect()(InternalViewUnAnsweredQuestion);